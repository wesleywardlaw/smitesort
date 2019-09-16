require('dotenv').config();
const { ApolloServer, PubSub } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
// const { MONGODB } = require('./config');

const pubsub = new PubSub();

const server = new ApolloServer({
    cors: {
        origin: '*',
        credentials: true
    },
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req, pubsub })
});

mongoose
    .connect(process.env.MONGODB, { useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB Connected');
        return server.listen({ port: process.env.PORT });
    })
    .then(res => {
        console.log(`server running at  ${res.url}`);
    });
