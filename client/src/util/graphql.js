import gql from 'graphql-tag';

export const FETCH_GODS_QUERY = gql`
    query(
        $name: String
        $pantheon: String
        $role: String
        $attack: String
        $power: String
        $description: String
        $traits: [String]
    ) {
        getGods(
            filter: {
                name: $name
                pantheon: $pantheon
                role: $role
                attack: $attack
                power: $power
                description: $description
                traits: $traits
            }
        ) {
            id
            name
            pantheon
            role
            attack
            power
            description
            traits
            releaseNumber
        }
    }
`;
