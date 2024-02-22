import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";

import { config } from "./config/config";
import { logger } from "./utils/logger";
import { typeDefs } from "./typeDefs.generated";
import { resolvers } from "./resolvers.generated";

import { prisma } from "./db";
import { type ServerContext } from "./context";


const app = express();

const apolloServer = new ApolloServer<ServerContext>({
	typeDefs,
	resolvers,
});

apolloServer
	.start()
	.then(() => {
		logger.info("Apollo server initialized");

		app.use(bodyParser.json());

		app.get("/^(?!/graphql$).*$/", (_, res) => {
			res.status(404).json({
				status: "not found",
			});
		});

		// kubernetes health check endpoint
		app.get("/status", (_, res) => {
			res.status(200).json({
				status: "ok",
			});
		});

		// graphql endpoint
		app.use(
			"/graphql",
			expressMiddleware<ServerContext>(apolloServer, {
				// context function returns a context object that will be available in all resolvers
				// may be useful later for authentication & other stuff
				context: async ({ req }) => ({ headers: req.headers, db: prisma }),
			}),
		);
		app.listen(config.NODE_PORT, () => {
			logger.info(`🚀 Server ready at port ${config.NODE_PORT}`);
		});
	})
	.catch((err) => {
		logger.error(`Server failed to start: ${err}`);
	});
