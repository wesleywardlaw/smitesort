const godsResolvers = require('./gods');
const userResolvers = require('./users');

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
    }
};
