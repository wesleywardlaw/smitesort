const { gql } = require('apollo-server');

module.exports = gql`
    type God {
        id: ID!
        name: String!
        pantheon: String!
        role: String!
        attack: String!
        power: String!
        description: String!
        traits: [String]!
        releaseNumber: Int!
        likes: [Like]!
    }

    input Filter {
        name: String
        pantheon: String
        role: String
        attack: String
        power: String
        description: String
        traits: [String]
        releaseNumber: Int
    }

    type Post {
        id: ID!
        body: String!
        createdAt: String!
        username: String!
        comments: [Comment]!
        likes: [Like]!
        likeCount: Int!
        commentCount: Int!
    }
    type Comment {
        id: ID!
        createdAt: String!
        username: String!
        body: String!
    }
    type Like {
        id: ID!
        createdAt: String!
        username: String!
    }
    type User {
        id: ID!
        email: String!
        token: String!
        username: String!
        createdAt: String!
    }
    input RegisterInput {
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
    }
    type Query {
        getGods(filter: Filter): [God]
        getPosts: [Post]
        getPost(postId: ID!): Post
    }
    type Mutation {
        register(registerInput: RegisterInput): User!
        login(username: String!, password: String!): User!
        createPost(body: String!): Post!
        deletePost(postId: ID!): String!
        createComment(postId: ID!, body: String!): Post!
        deleteComment(postId: ID!, commentId: ID!): Post!
        likePost(postId: ID!): Post!
        likeGod(id: ID!): God!
        createGod(
            name: String!
            pantheon: String!
            role: String!
            attack: String!
            power: String!
            description: String!
            traits: [String]!
            releaseNumber: Int!
        ): God!
    }
    type Subscription {
        newPost: Post!
    }
`;
