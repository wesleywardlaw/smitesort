const God = require('../../models/God');
const { UserInputError } = require('apollo-server');
const checkAuth = require('../../util/check-auth');

module.exports = {
    Query: {
        async getGods(_, { filter }) {
            try {
                //if there is a filter and the filter has traits use the $all query
                filter
                    ? filter.traits && filter.traits.length !== 0
                        ? (filter.traits = { $all: filter.traits })
                        : []
                    : '';

                let god;
                //if traits is empty and isn't the only property, then create a new filter without it
                if (
                    filter &&
                    filter.traits &&
                    filter.traits.length === 0 &&
                    Object.keys(filter).length > 1
                ) {
                    const { traits, ...newFilter } = filter;
                    god = await God.find(newFilter);
                } else if (filter !== undefined && filter.traits.length !== 0) {
                    god = await God.find(filter);
                } else {
                    god = await God.find();
                }

                if (god.length > 0) {
                    return god;
                } else {
                    throw new Error('God not found');
                }
            } catch (err) {
                console.log(err);
                throw new Error(err);
            }
        }
    },
    Mutation: {
        async createGod(
            _,
            {
                name,
                pantheon,
                role,
                attack,
                power,
                description,
                traits,
                releaseNumber
            },
            context
        ) {
            const newGod = new God({
                name,
                pantheon,
                role,
                attack,
                power,
                description,
                traits,
                releaseNumber
            });

            const god = await newGod.save();

            return god;
        },

        async likeGod(_, { id }, context) {
            const { username } = checkAuth(context);
            const god = await God.findById(id);
            if (god) {
                if (god.likes.find(like => like.username === username)) {
                    //God already liked, unlike it
                    god.likes = god.likes.filter(
                        like => like.username !== username
                    );
                    await god.save();
                } else {
                    //not liked, like god
                    god.likes.push({
                        username,
                        createdAt: new Date().toISOString()
                    });
                }
                await god.save();
                return god;
            } else throw new UserInputError();
        }
    }
};
