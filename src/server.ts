import express from "express";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./graphql/typeDefs.generated";
import { resolvers } from "./graphql/resolvers.generated";

import { config } from "./config/config";

const app = express();
const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
});

// kubernetes health check
app.get("/status", (req, res) => {
	res.status(200).json({
		status: "ok",
	});
});

app.listen(config.NODE_PORT, () => {
	console.log(`🚀 REST server ready at port ${config.NODE_PORT}`);
});

startStandaloneServer(apolloServer, {
	listen: { port: config.GRAPHQL_PORT },
})
	.then(({ url }) => {
		console.log(`🚀 GraphQL server ready at ${url}`);
	})
	.catch((err) => {
		console.error(err);
	});
