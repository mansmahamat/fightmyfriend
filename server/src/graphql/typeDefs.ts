import {gql} from 'apollo-server-express'

export const typeDefs = gql`
type Listing {
    id: ID!
    title: String!
    image: String!
    address: String!
    price: Int!
    rating: Int!
}

type Query {
    listings: [Listing!]
}

type Mutation {
    deleteListings(id : ID!): Listing!
}
`;