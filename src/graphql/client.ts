import { GraphQLClient } from 'graphql-request'

const endpoint =
  process.env.GRAPHQL_HOST ||
  'https://api-ca-central-1.graphcms.com/v2/ckngonac03zl401xoazlz45u7/master'

const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`
  }
})

export default client
