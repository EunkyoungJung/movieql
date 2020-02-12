//console.log("bobo");
//const graphqlYoga = require("graphql-yoga");

import { GraphQLServer } from "graphql-yoga";
//console.log("hello marie")
import resolvers from "./graphql/resolvers"
import { resolveSrv } from "dns";

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers: resolvers
})
server.start(()=> console.log("Graphql Server Running"));