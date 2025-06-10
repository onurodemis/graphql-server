const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('../src/typeDefs');
const { resolvers } = require('../src/resolvers');

let server;

beforeAll(() => {
  server = new ApolloServer({ typeDefs, resolvers });
});

afterAll(async () => {
  await server.stop();
});

test('healthy query returns expected message', async () => {
  const res = await server.executeOperation({ query: '{ healthy }' });
  expect(res.errors).toBeUndefined();
  expect(res.data.healthy).toBe('GraphQL server is healthy');
});

