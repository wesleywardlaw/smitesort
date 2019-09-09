const God = require('../../models/God');

module.exports = {
    Query: {
        async getGods(_, { filter }) {
            try {
                console.log(filter);
                filter.traits ? (filter.traits = { $in: filter.traits }) : '';
                let god;
                if (filter !== undefined) {
                    god = await God.find(filter);
                } else {
                    god = await God.find();
                }

                console.log(god);
                //.sort({ createdAt: -1 });
                if (god.length > 0) {
                    return god;
                } else {
                    throw new Error('God not found');
                }
            } catch (err) {
                throw new Error(err);
            }
        }
        // async getPost(_, { postId }) {
        //     try {
        //         const post = await Post.findById(postId);
        //         if (post) {
        //             return post;
        //         } else {
        //             throw new Error('Post not found');
        //         }
        //     } catch (err) {
        //         throw new Error(err);
        //     }
        // }
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
        }
    }
};
