const godsResolvers = require('./gods');
const userResolvers = require('./users');
// const commentsResolvers = require('./comments');

module.exports = {
    Post: {
        likeCount(parent) {
            console.log(parent);
            return parent.likes.length;
        },
        commentCount: parent => parent.comments.length
    },
    Query: {
        ...godsResolvers.Query
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...godsResolvers.Mutation
        // ...commentsResolvers.Mutation
    },
    Subscription: {
        // ...postsResolvers.Subscription
    }
};
