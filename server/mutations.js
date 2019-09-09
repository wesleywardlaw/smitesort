const HIGH_SINGLE_TARGET_DAMAGE = 'high single target damage';
const HIGH_MOBILITY = 'high mobility';

gql`
    mutation {
        createGod(
            name: "Achilles"
            pantheon: "Greek"
            role: "Warrior"
            attack: "melee"
            power: "physical"
            description: "hero of the trojan war"
            traits: [HIGH_SINGLE_TARGET_DAMAGE, HIGH_MOBILITY]
            releaseNumber: 104
        ) {
            id
            name
            pantheon
            role
            description
            traits
            releaseNumber
        }
    }
`;
