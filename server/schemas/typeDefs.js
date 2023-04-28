const { gql} = require ('apollo-server-express');

typeDefs= gql`
type User {
    _id: ID!
    username: String!
    email : String!
    bookCount: Int
    savedBooks: [Book]
}

type Book {
    bookId: ID!
    authors : [String]
    description : String
    title : String!
    image: String
    link: String

} 

imput SaveBookInput {
    bookId: ID!
    authors: [String] 
    description : String
    title : String
    image: String
    link : String
}

type Auth{
    token: ID!
    user: User
}

type Query {
    users: [User]
    user(username: String!): User
}

type Mutation {
    login(email: String, password: String!) : Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: SaveBookInput!) :   User

}`;

module.exports = typeDefs;



