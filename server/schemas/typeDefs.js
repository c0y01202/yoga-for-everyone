const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    classes: [Class]
    friends: [User]
  }

  type Class {
    _id: ID
    classText: String
    testText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }

  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    classes(username: String): [Class]
    class(_id: ID!): Class
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addClass(classText: String!, testText: String!): Class
    addReaction(classId: ID!, reactionBody: String!): Class
    addFriend(friendId: ID!): User
  }
`;

module.exports = typeDefs;
