import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";
import { typeDefs } from "./graphql/typeDefs.generated";
import { resolvers } from "./graphql/resolvers.generated";

import { config } from "./config/config";

const app = express();
const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
});

apolloServer
	.start()
	.then(() => {
		console.log("Apollo initialized");

		app.use(bodyParser.json());

		// kubernetes health check endpoint
		app.get("/status", (req, res) => {
			res.status(200).json({
				status: "ok",
			});
		});

		// graphql endpoint
		app.use(
			"/graphql",
			expressMiddleware(apolloServer, {
				// context function returns a context object that will be available in all resolvers
				// may be useful later for authentication & other stuff
				context: async ({ req }) => ({ headers: req.headers }),
			}),
		);
		app.listen(config.NODE_PORT, () => {
			console.log(`🚀 Server ready at port ${config.NODE_PORT}`);
		});
	})
	.catch((err) => {
		console.log(err);
	});
