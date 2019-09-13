const HIGH_SINGLE_TARGET_DAMAGE = 'high single target damage';
const HIGH_MOBILITY = 'high mobility';
const HIGH_AREA_DAMAGE = 'high area damage';
const HIGH_MOVEMENT_SPEED = 'high movement speed';
const HIGH_ATTACK_SPEED = 'high attack speed';
const HIGH_SUSTAIN = 'high sustain';
const GREAT_JUNGLER = 'great jungler';
const HIGH_CROWD_CONTROL = 'high crowd control';
const MEDIUM_CROWD_CONTROL = 'medium crowd control';
const HIGH_DEFENSE = 'high defense';
const MEDIUM_AREA_DAMAGE = 'medium area damage';
const PUSHER = 'pusher';

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
            releaseNumber: 94
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

gql`
    mutation {
        createGod(
            name: "Agni"
            pantheon: "Hindu"
            role: "Mage"
            attack: "ranged"
            power: "magical"
            description: "god of fire"
            traits: [HIGH_AREA_DAMAGE]
            releaseNumber: 1
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

gql`
    mutation {
        createGod(
            name: "Ah Muzen Cab"
            pantheon: "Mayan"
            role: "Hunter"
            attack: "ranged"
            power: "physical"
            description: "god of bees"
            traits: [HIGH_MOVEMENT_SPEED, HIGH_ATTACK_SPEED]
            releaseNumber: 45
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

gql`
    mutation {
        createGod(
            name: "Ah Puch"
            pantheon: "Mayan"
            role: "Mage"
            attack: "ranged"
            power: "magical"
            description: "horrific god of decay"
            traits: [HIGH_AREA_DAMAGE]
            releaseNumber: 65
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

gql`
    mutation {
        createGod(
            name: "Amaterasu"
            pantheon: "Japanese"
            role: "Warrior"
            attack: "melee"
            power: "physical"
            description: "the shining light"
            traits: [HIGH_AREA_DAMAGE, HIGH_MOBILITY]
            releaseNumber: 72
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

gql`
    mutation {
        createGod(
            name: "Anhur"
            pantheon: "Egyptian"
            role: "Hunter"
            attack: "ranged"
            power: "physical"
            description: "slayer of enemies"
            traits: [HIGH_SINGLE_TARGET_DAMAGE]
            releaseNumber: 20
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

gql`
    mutation {
        createGod(
            name: "Anubis"
            pantheon: "Egyptian"
            role: "Mage"
            attack: "ranged"
            power: "magical"
            description: "god of the dead"
            traits: [HIGH_AREA_DAMAGE]
            releaseNumber: 2
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

gql`
    mutation {
        createGod(
            name: "Ao Kuang"
            pantheon: "Chinese"
            role: "Mage"
            attack: "melee"
            power: "magical"
            description: "dragon king of the eastern seas"
            traits: [HIGH_SINGLE_TARGET_DAMAGE]
            releaseNumber: 60
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

gql`
    mutation {
        createGod(
            name: "Aphrodite"
            pantheon: "Greek"
            role: "Mage"
            attack: "ranged"
            power: "magical"
            description: "goddess of beauty"
            traits: [HIGH_SINGLE_TARGET_DAMAGE]
            releaseNumber: 32
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

gql`
    mutation {
        createGod(
            name: "Apollo"
            pantheon: "Greek"
            role: "Hunter"
            attack: "ranged"
            power: "physical"
            description: "god of music"
            traits: [HIGH_MOBILITY]
            releaseNumber: 33
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

gql`
    mutation {
        createGod(
            name: "Arachne"
            pantheon: "Greek"
            role: "Assassin"
            attack: "melee"
            power: "physical"
            description: "the weaver"
            traits: [HIGH_SINGLE_TARGET_DAMAGE, GREAT_JUNGLER]
            releaseNumber: 3
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

gql`
    mutation {
        createGod(
            name: "Ares"
            pantheon: "Greek"
            role: "Guardian"
            attack: "melee"
            power: "magical"
            description: "god of war"
            traits: [HIGH_CROWD_CONTROL, HIGH_DEFENSE]
            releaseNumber: 23
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

gql`
    mutation {
        createGod(
            name: "Artemis"
            pantheon: "Greek"
            role: "Hunter"
            attack: "ranged"
            power: "physical"
            description: "goddess of the hunt"
            traits: [HIGH_SINGLE_TARGET_DAMAGE]
            releaseNumber: 4
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

gql`
    mutation {
        createGod(
            name: "Artio"
            pantheon: "Celtic"
            role: "Guardian"
            attack: "melee"
            power: "magical"
            description: "the bear goddess"
            traits: [HIGH_CROWD_CONTROL, HIGH_SUSTAIN]
            releaseNumber: 90
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

gql`
    mutation {
        createGod(
            name: "Athena"
            pantheon: "Greek"
            role: "Guardian"
            attack: "melee"
            power: "magical"
            description: "goddess of wisdom"
            traits: [HIGH_CROWD_CONTROL, HIGH_DEFENSE]
            releaseNumber: 37
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

gql`
    mutation {
        createGod(
            name: "Awilix"
            pantheon: "Mayan"
            role: "Assassin"
            attack: "melee"
            power: "physical"
            description: "goddess of the moon"
            traits: [HIGH_SINGLE_TARGET_DAMAGE, HIGH_MOBILITY]
            releaseNumber: 61
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

gql`
    mutation {
        createGod(
            name: "Bacchus"
            pantheon: "Roman"
            role: "Guardian"
            attack: "melee"
            power: "magical"
            description: "god of wine"
            traits: [HIGH_CROWD_CONTROL, HIGH_DEFENSE]
            releaseNumber: 26
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

gql`
    mutation {
        createGod(
            name: "Bakasura"
            pantheon: "Hindu"
            role: "Assassin"
            attack: "melee"
            power: "physical"
            description: "the great devourer"
            traits: [HIGH_SINGLE_TARGET_DAMAGE]
            releaseNumber: 19
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

gql`
    mutation {
        createGod(
            name: "Baron Samedi"
            pantheon: "Voodoo"
            role: "Mage"
            attack: "ranged"
            power: "magical"
            description: "god of life and death"
            traits: [HIGH_CROWD_CONTROL, HIGH_SUSTAIN, MEDIUM_AREA_DAMAGE]
            releaseNumber: 96
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

gql`
    mutation {
        createGod(
            name: "Bastet"
            pantheon: "Egyptian"
            role: "Assassin"
            attack: "melee"
            power: "physical"
            description: "goddess of cats"
            traits: [HIGH_SINGLE_TARGET_DAMAGE]
            releaseNumber: 5
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

gql`
    mutation {
        createGod(
            name: "Bellona"
            pantheon: "Roman"
            role: "Warrior"
            attack: "melee"
            power: "physical"
            description: "goddess of war"
            traits: [HIGH_DEFENSE]
            releaseNumber: 63
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

gql`
    mutation {
        createGod(
            name: "Cabrakan"
            pantheon: "Mayan"
            role: "Guardian"
            attack: "melee"
            power: "magical"
            description: "destroyer of mountains"
            traits: [HIGH_CROWD_CONTROL, HIGH_DEFENSE]
            releaseNumber: 57
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

gql`
    mutation {
        createGod(
            name: "Camazotz"
            pantheon: "Mayan"
            role: "Assassin"
            attack: "melee"
            power: "physical"
            description: "deadly god of bats"
            traits: [HIGH_SUSTAIN, GREAT_JUNGLER]
            releaseNumber: 81
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

gql`
    mutation {
        createGod(
            name: "Cerberus"
            pantheon: "Greek"
            role: "Guardian"
            attack: "melee"
            power: "magical"
            description: "warden of the underworld"
            traits: [MEDIUM_CROWD_CONTROL, MEDIUM_AREA_DAMAGE]
            releaseNumber: 93
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

gql`
    mutation {
        createGod(
            name: "Cernunnos"
            pantheon: "Celtic"
            role: "Hunter"
            attack: "ranged"
            power: "physical"
            description: "the horned god"
            traits: [HIGH_AREA_DAMAGE, HIGH_CROWD_CONTROL]
            releaseNumber: 86
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

gql`
    mutation {
        createGod(
            name: "Chaac"
            pantheon: "Mayan"
            role: "Warrior"
            attack: "melee"
            power: "physical"
            description: "god of rain"
            traits: [HIGH_SUSTAIN]
            releaseNumber: 47
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

gql`
    mutation {
        createGod(
            name: "Chang'e"
            pantheon: "Chinese"
            role: "Mage"
            attack: "ranged"
            power: "magical"
            description: "faerie of the moon"
            traits: [HIGH_SUSTAIN, HIGH_MOBILITY]
            releaseNumber: 39
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

gql`
    mutation {
        createGod(
            name: "Chernobog"
            pantheon: "Slavic"
            role: "Hunter"
            attack: "ranged"
            power: "physical"
            description: "lord of darkness"
            traits: [HIGH_SINGLE_TARGET_DAMAGE, HIGH_ATTACK_SPEED]
            releaseNumber: 95
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

gql`
    mutation {
        createGod(
            name: "Chiron"
            pantheon: "Greek"
            role: "Hunter"
            attack: "ranged"
            power: "physical"
            description: "the great teacher"
            traits: [HIGH_SUSTAIN, HIGH_MOVEMENT_SPEED]
            releaseNumber: 71
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

gql`
    mutation {
        createGod(
            name: "Chronos"
            pantheon: "Greek"
            role: "Mage"
            attack: "ranged"
            power: "magical"
            description: "keeper of time"
            traits: [MEDIUM_CROWD_CONTROL, HIGH_MOBILITY]
            releaseNumber: 38
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

gql`
    mutation {
        createGod(
            name: "Cu Chulainn"
            pantheon: "Celtic"
            role: "Warrior"
            attack: "melee"
            power: "physical"
            description: "hound of ulster"
            traits: [HIGH_AREA_DAMAGE, HIGH_CROWD_CONTROL]
            releaseNumber: 89
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

gql`
    mutation {
        createGod(
            name: "Cupid"
            pantheon: "Roman"
            role: "Hunter"
            attack: "ranged"
            power: "physical"
            description: "god of love"
            traits: [HIGH_SINGLE_TARGET_DAMAGE, HIGH_SUSTAIN]
            releaseNumber: 21
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

gql`
    mutation {
        createGod(
            name: "Da Ji"
            pantheon: "Chinese"
            role: "Assassin"
            attack: "melee"
            power: "physical"
            description: "the nine-tailed fox"
            traits: [HIGH_SINGLE_TARGET_DAMAGE]
            releaseNumber: 88
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

gql`
    mutation {
        createGod(
            name: "Discordia"
            pantheon: "Roman"
            role: "Mage"
            attack: "ranged"
            power: "magical"
            description: "goddess of strife"
            traits: [HIGH_AREA_DAMAGE]
            releaseNumber: 92
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

gql`
    mutation {
        createGod(
            name: "Erlang Shen"
            pantheon: "Chinese"
            role: "Warrior"
            attack: "melee"
            power: "physical"
            description: "the illustrious sage"
            traits: [HIGH_SINGLE_TARGET_DAMAGE, HIGH_ATTACK_SPEED]
            releaseNumber: 78
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

gql`
    mutation {
        createGod(
            name: "Fafnir"
            pantheon: "Norse"
            role: "Guardian"
            attack: "melee"
            power: "magical"
            description: "the lord of glittering gold"
            traits: [HIGH_DEFENSE, HIGH_MOBILITY]
            releaseNumber: 77
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

gql`
    mutation {
        createGod(
            name: "Fenrir"
            pantheon: "Norse"
            role: "Assassin"
            attack: "melee"
            power: "physical"
            description: "the unbound"
            traits: [HIGH_SINGLE_TARGET_DAMAGE, HIGH_MOBILITY]
            releaseNumber: 35
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

gql`
    mutation {
        createGod(
            name: "Freya"
            pantheon: "Norse"
            role: "Mage"
            attack: "melee"
            power: "magical"
            description: "queen of the valkyries"
            traits: [HIGH_AREA_DAMAGE, MEDIUM_CROWD_CONTROL]
            releaseNumber: 24
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

gql`
    mutation {
        createGod(
            name: "Ganesha"
            pantheon: "Hindu"
            role: "Guardian"
            attack: "melee"
            power: "magical"
            description: "god of success"
            traits: [HIGH_CROWD_CONTROL, HIGH_DEFENSE]
            releaseNumber: 87
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

gql`
    mutation {
        createGod(
            name: "Geb"
            pantheon: "Egyptian"
            role: "Guardian"
            attack: "melee"
            power: "magical"
            description: "god of earth"
            traits: [HIGH_CROWD_CONTROL, HIGH_DEFENSE]
            releaseNumber: 48
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

gql`
    mutation {
        createGod(
            name: "Guan Yu"
            pantheon: "Chinese"
            role: "Warrior"
            attack: "melee"
            power: "physical"
            description: "saint of war"
            traits: [HIGH_SUSTAIN, HIGH_MOBILITY]
            releaseNumber: 18
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

gql`
    mutation {
        createGod(
            name: "Hachiman"
            pantheon: "Japanese"
            role: "Hunter"
            attack: "ranged"
            power: "physical"
            description: "lord of the eight banners"
            traits: [HIGH_SINGLE_TARGET_DAMAGE, HIGH_MOBILITY]
            releaseNumber: 91
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

gql`
    mutation {
        createGod(
            name: "Hades"
            pantheon: "Greek"
            role: "Mage"
            attack: "ranged"
            power: "magical"
            description: "king of the underworld"
            traits: [HIGH_DEFENSE, HIGH_SUSTAIN]
            releaseNumber: 6
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

gql`
    mutation {
        createGod(
            name: "He Bo"
            pantheon: "Chinese"
            role: "Mage"
            attack: "ranged"
            power: "magical"
            description: "god of the yellow river"
            traits: [HIGH_AREA_DAMAGE, MEDIUM_CROWD_CONTROL]
            releaseNumber: 7
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

gql`
    mutation {
        createGod(
            name: "Hel"
            pantheon: "Norse"
            role: "Mage"
            attack: "ranged"
            power: "magical"
            description: "goddess of the underworld"
            traits: [HIGH_AREA_DAMAGE, HIGH_SUSTAIN]
            releaseNumber: 8
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

gql`
    mutation {
        createGod(
            name: "Hera"
            pantheon: "Greek"
            role: "Mage"
            attack: "ranged"
            power: "magical"
            description: "queen of the gods"
            traits: [HIGH_AREA_DAMAGE, HIGH_CROWD_CONTROL]
            releaseNumber: 98
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

gql`
    mutation {
        createGod(
            name: "Hercules"
            pantheon: "Roman"
            role: "Warrior"
            attack: "melee"
            power: "physical"
            description: "champion of rome"
            traits: [HIGH_SINGLE_TARGET_DAMAGE, HIGH_SUSTAIN]
            releaseNumber: 28
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

gql`
    mutation {
        createGod(
            name: "Horus"
            pantheon: "Egyptian"
            role: "Warrior"
            attack: "melee"
            power: "physical"
            description: "the rightful heir"
            traits: [HIGH_DEFENSE, HIGH_SUSTAIN]
            releaseNumber: 102
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

gql`
    mutation {
        createGod(
            name: "Hou Yi"
            pantheon: "Chinese"
            role: "Hunter"
            attack: "ranged"
            power: "physical"
            description: "defender of the earth"
            traits: [HIGH_AREA_DAMAGE, HIGH_SINGLE_TARGET_DAMAGE]
            releaseNumber: 62
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

gql`
    mutation {
        createGod(
            name: "Hun Batz"
            pantheon: "Mayan"
            role: "Assassin"
            attack: "melee"
            power: "physical"
            description: "the howler monkey god"
            traits: [HIGH_SINGLE_TARGET_DAMAGE]
            releaseNumber: 9
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

gql`
    mutation {
        createGod(
            name: "Isis"
            pantheon: "Egyptian"
            role: "Mage"
            attack: "ranged"
            power: "magical"
            description: "goddess of magic"
            traits: [HIGH_AREA_DAMAGE, HIGH_CROWD_CONTROL]
            releaseNumber: 36
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

gql`
    mutation {
        createGod(
            name: "Izanami"
            pantheon: "Japanese"
            role: "hunter"
            attack: "ranged"
            power: "physical"
            description: "matron of the dead"
            traits: [HIGH_AREA_DAMAGE, PUSHER]
            releaseNumber: 80
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

gql`
    mutation {
        createGod(
            name: "Janus"
            pantheon: "Roman"
            role: "Mage"
            attack: "ranged"
            power: "magical"
            description: "god of portals and transitions"
            traits: [HIGH_AREA_DAMAGE, HIGH_MOBILITY]
            releaseNumber: 54
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

gql`
    mutation {
        createGod(
            name: "Jing Wei"
            pantheon: "Chinese"
            role: "Hunter"
            attack: "ranged"
            power: "physical"
            description: "the oathkeeper"
            traits: [HIGH_MOBILITY]
            releaseNumber: 75
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

gql`
    mutation {
        createGod(
            name: "Jormungandr"
            pantheon: "Norse"
            role: "Guardian"
            attack: "ranged"
            power: "magical"
            description: "the world serpent"
            traits: [HIGH_AREA_DAMAGE]
            releaseNumber: 101
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

gql`
    mutation {
        createGod(
            name: "Kali"
            pantheon: "Hindu"
            role: "Assassin"
            attack: "melee"
            power: "physical"
            description: "goddess of destruction"
            traits: [HIGH_SINGLE_TARGET_DAMAGE, HIGH_SUSTAIN]
            releaseNumber: 10
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

gql`
    mutation {
        createGod(
            name: "Khepri"
            pantheon: "Egyptian"
            role: "Guardian"
            attack: "melee"
            power: "magical"
            description: "the dawn bringer"
            traits: [HIGH_CROWD_CONTROL, HIGH_DEFENSE]
            releaseNumber: 68
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

gql`
    mutation {
        createGod(
            name: "King Arthur"
            pantheon: "Arthurian"
            role: "Warrior"
            attack: "melee"
            power: "physical"
            description: "wielder of excalibur"
            traits: [HIGH_AREA_DAMAGE, HIGH_CROWD_CONTROL]
            releaseNumber: 99
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

gql`
    mutation {
        createGod(
            name: "Kukulkan"
            pantheon: "Mayan"
            role: "Mage"
            attack: "ranged"
            power: "magical"
            description: "serpent of the nine winds"
            traits: [HIGH_AREA_DAMAGE, PUSHER]
            releaseNumber: 11
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

gql`
    mutation {
        createGod(
            name: "Kumbhakarna"
            pantheon: "Hindu"
            role: "Guardian"
            attack: "melee"
            power: "magical"
            description: "the sleeping giant"
            traits: [HIGH_CROWD_CONTROL, HIGH_DEFENSE]
            releaseNumber: 52
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

gql`
    mutation {
        createGod(
            name: "Kuzenbo"
            pantheon: "Japanese"
            role: "Guardian"
            attack: "melee"
            power: "magical"
            description: "king kappa"
            traits: [HIGH_CROWD_CONTROL, HIGH_DEFENSE]
            releaseNumber: 85
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

gql`
    mutation {
        createGod(
            name: "Loki"
            pantheon: "Norse"
            role: "Assassin"
            attack: "melee"
            power: "physical"
            description: "the trickster god"
            traits: [HIGH_SINGLE_TARGET_DAMAGE]
            releaseNumber: 25
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

gql`
    mutation {
        createGod(
            name: "Medusa"
            pantheon: "Greek"
            role: "Hunter"
            attack: "ranged"
            power: "physical"
            description: "the gorgon"
            traits: [HIGH_SINGLE_TARGET_DAMAGE]
            releaseNumber: 64
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

gql`
    mutation {
        createGod(
            name: "Mercury"
            pantheon: "Roman"
            role: "Assassin"
            attack: "melee"
            power: "physical"
            description: "messenger of the gods"
            traits: [HIGH_SINGLE_TARGET_DAMAGE, HIGH_MOBILITY]
            releaseNumber: 43
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

gql`
    mutation {
        createGod(
            name: "Merlin"
            pantheon: "Arthurian"
            role: "Mage"
            attack: "ranged"
            power: "magical"
            description: "the master wizard"
            traits: [HIGH_AREA_DAMAGE]
            releaseNumber: 100
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

gql`
    mutation {
        createGod(
            name: "Ne Zha"
            pantheon: "Chinese"
            role: "Assassin"
            attack: "melee"
            power: "physical"
            description: "the third lotus prince"
            traits: [HIGH_SINGLE_TARGET_DAMAGE, MEDIUM_CROWD_CONTROL]
            releaseNumber: 34
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

gql`
    mutation {
        createGod(
            name: "Neith"
            pantheon: "Egyptian"
            role: "Hunter"
            attack: "ranged"
            power: "physical"
            description: "weaver of fate"
            traits: [HIGH_CROWD_CONTROL, HIGH_SUSTAIN]
            releaseNumber: 30
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

gql`
    mutation {
        createGod(
            name: "Nemesis"
            pantheon: "Greek"
            role: "Assassin"
            attack: "melee"
            power: "physical"
            description: "goddess of vengeance"
            traits: [HIGH_MOBILITY]
            releaseNumber: 49
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

gql`
    mutation {
        createGod(
            name: "Nike"
            pantheon: "Greek"
            role: "Warrior"
            attack: "melee"
            power: "physical"
            description: "goddess of victory"
            traits: [HIGH_DEFENSE, MEDIUM_CROWD_CONTROL]
            releaseNumber: 83
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

gql`
    mutation {
        createGod(
            name: "Nox"
            pantheon: "Roman"
            role: "Mage"
            attack: "ranged"
            power: "magical"
            description: "goddess of night"
            traits: [HIGH_CROWD_CONTROL]
            releaseNumber: 59
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

gql`
    mutation {
        createGod(
            name: "Nu Wa"
            pantheon: "Chinese"
            role: "Mage"
            attack: "ranged"
            power: "magical"
            description: "guardian of heaven"
            traits: [PUSHER]
            releaseNumber: 46
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

gql`
    mutation {
        createGod(
            name: "Odin"
            pantheon: "Norse"
            role: "Warrior"
            attack: "melee"
            power: "physical"
            description: "the allfather"
            traits: [HIGH_AREA_DAMAGE, HIGH_CROWD_CONTROL]
            releaseNumber: 12
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

gql`
    mutation {
        createGod(
            name: "Olorun"
            pantheon: "Yoruba"
            role: "Mage"
            attack: "ranged"
            power: "magical"
            description: "ruler of the heavens"
            traits: [HIGH_ATTACK_SPEED]
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
gql`
    mutation {
        createGod(
            name: "Osiris"
            pantheon: "Egyptian"
            role: "Warrior"
            attack: "melee"
            power: "physical"
            description: "broken god of the afterlife"
            traits: [HIGH_DEFENSE, HIGH_ATTACK_SPEED]
            releaseNumber: 53
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

gql`
    mutation {
        createGod(
            name: "Pele"
            pantheon: "Polynesian"
            role: "Assassin"
            attack: "melee"
            power: "physical"
            description: "goddess of volcanoes"
            traits: [HIGH_SINGLE_TARGET_DAMAGE]
            releaseNumber: 97
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

gql`
    mutation {
        createGod(
            name: "Persephone"
            pantheon: "Greek"
            role: "Mage"
            attack: "ranged"
            power: "magical"
            description: "queen of the underworld"
            traits: []
            releaseNumber: 105
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

gql`
    mutation {
        createGod(
            name: "Poseidon"
            pantheon: "Greek"
            role: "Mage"
            attack: "ranged"
            power: "magical"
            description: "god of the oceans"
            traits: [HIGH_AREA_DAMAGE]
            releaseNumber: 31
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

gql`
    mutation {
        createGod(
            name: "Ra"
            pantheon: "Egyptian"
            role: "Mage"
            attack: "ranged"
            power: "magical"
            description: "sun god"
            traits: [HIGH_SUSTAIN, PUSHER]
            releaseNumber: 13
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

gql`
    mutation {
        createGod(
            name: "Raijin"
            pantheon: "Japanese"
            role: "Mage"
            attack: "ranged"
            power: "magical"
            description: "master of thunder"
            traits: [PUSHER, HIGH_MOBILITY]
            releaseNumber: 73
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

gql`
    mutation {
        createGod(
            name: "Rama"
            pantheon: "Hindu"
            role: "Hunter"
            attack: "ranged"
            power: "physical"
            description: "seventh avatar of vishnu"
            traits: [HIGH_MOBILITY, HIGH_ATTACK_SPEED]
            releaseNumber: 55
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

gql`
    mutation {
        createGod(
            name: "Ratatoskr"
            pantheon: "Norse"
            role: "Assassin"
            attack: "melee"
            power: "physical"
            description: "the sly messenger"
            traits: [GREAT_JUNGLER, HIGH_MOBILITY]
            releaseNumber: 66
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

gql`
    mutation {
        createGod(
            name: "Ravana"
            pantheon: "Hindu"
            role: "Assassin"
            attack: "melee"
            power: "physical"
            description: "demon king of lanka"
            traits: [HIGH_SINGLE_TARGET_DAMAGE, HIGH_SUSTAIN]
            releaseNumber: 67
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

gql`
    mutation {
        createGod(
            name: "Scylla"
            pantheon: "Greek"
            role: "Mage"
            attack: "ranged"
            power: "magical"
            description: "horror of the sea"
            traits: [HIGH_AREA_DAMAGE]
            releaseNumber: 50
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

gql`
    mutation {
        createGod(
            name: "Serqet"
            pantheon: "Egyptian"
            role: "Assassin"
            attack: "melee"
            power: "physical"
            description: "goddess of venom"
            traits: [HIGH_SINGLE_TARGET_DAMAGE, HIGH_MOBILITY]
            releaseNumber: 56
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

gql`
    mutation {
        createGod(
            name: "Set"
            pantheon: "Egyptian"
            role: "Assassin"
            attack: "melee"
            power: "physical"
            description: "the usurper"
            traits: [HIGH_SINGLE_TARGET_DAMAGE]
            releaseNumber: 103
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
gql`
    mutation {
        createGod(
            name: "Skadi"
            pantheon: "Norse"
            role: "Hunter"
            attack: "ranged"
            power: "physical"
            description: "goddess of winter"
            traits: [HIGH_CROWD_CONTROL, PUSHER]
            releaseNumber: 74
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

gql`
    mutation {
        createGod(
            name: "Sobek"
            pantheon: "Egyptian"
            role: "Guardian"
            attack: "melee"
            power: "magical"
            description: "god of the nile"
            traits: [HIGH_CROWD_CONTROL, HIGH_DEFENSE]
            releaseNumber: 14
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

gql`
    mutation {
        createGod(
            name: "Sol"
            pantheon: "Norse"
            role: "Mage"
            attack: "ranged"
            power: "magical"
            description: "goddess of the sun"
            traits: [HIGH_SINGLE_TARGET_DAMAGE, HIGH_MOBILITY]
            releaseNumber: 70
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

gql`
    mutation {
        createGod(
            name: "Sun Wukong"
            pantheon: "Chinese"
            role: "Warrior"
            attack: "melee"
            power: "physical"
            description: "the monkey king"
            traits: [HIGH_DEFENSE, HIGH_MOBILITY]
            releaseNumber: 44
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

gql`
    mutation {
        createGod(
            name: "Susano"
            pantheon: "Japanese"
            role: "Assassin"
            attack: "melee"
            power: "physical"
            description: "god of the summer storm"
            traits: [HIGH_CROWD_CONTROL, HIGH_MOBILITY]
            releaseNumber: 76
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

gql`
    mutation {
        createGod(
            name: "Sylvanus"
            pantheon: "Roman"
            role: "Guardian"
            attack: "ranged"
            power: "magical"
            description: "keeper of the wild"
            traits: [HIGH_CROWD_CONTROL, HIGH_SUSTAIN]
            releaseNumber: 58
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

gql`
    mutation {
        createGod(
            name: "Terra"
            pantheon: "Roman"
            role: "Guardian"
            attack: "melee"
            power: "magical"
            description: "the earth mother"
            traits: [HIGH_AREA_DAMAGE, HIGH_SUSTAIN]
            releaseNumber: 79
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

gql`
    mutation {
        createGod(
            name: "Thanatos"
            pantheon: "Greek"
            role: "Assassin"
            attack: "melee"
            power: "physical"
            description: "hand of death"
            traits: [HIGH_SUSTAIN]
            releaseNumber: 42
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

gql`
    mutation {
        createGod(
            name: "The Morrigan"
            pantheon: "Celtic"
            role: "Mage"
            attack: "ranged"
            power: "magical"
            description: "phantom queen"
            traits: [HIGH_AREA_DAMAGE]
            releaseNumber: 84
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

gql`
    mutation {
        createGod(
            name: "Thor"
            pantheon: "Norse"
            role: "Assassin"
            attack: "melee"
            power: "physical"
            description: "god of thunder"
            traits: [HIGH_SINGLE_TARGET_DAMAGE, MEDIUM_CROWD_CONTROL]
            releaseNumber: 22
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

gql`
    mutation {
        createGod(
            name: "Thoth"
            pantheon: "Egyptian"
            role: "Mage"
            attack: "ranged"
            power: "magical"
            description: "arbiter of the damned"
            traits: [HIGH_AREA_DAMAGE]
            releaseNumber: 82
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

gql`
    mutation {
        createGod(
            name: "Tyr"
            pantheon: "Norse"
            role: "Warrior"
            attack: "melee"
            power: "physical"
            description: "the lawgiver"
            traits: [HIGH_DEFENSE, MEDIUM_CROWD_CONTROL]
            releaseNumber: 40
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

gql`
    mutation {
        createGod(
            name: "Ullr"
            pantheon: "Norse"
            role: "Hunter"
            attack: "ranged"
            power: "physical"
            description: "the glorious one"
            traits: [HIGH_SUSTAIN]
            releaseNumber: 51
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

gql`
    mutation {
        createGod(
            name: "Vamana"
            pantheon: "Hindu"
            role: "Warrior"
            attack: "melee"
            power: "physical"
            description: "fifth avatar of vishnu"
            traits: [HIGH_DEFENSE, HIGH_SUSTAIN]
            releaseNumber: 15
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

gql`
    mutation {
        createGod(
            name: "Vulcan"
            pantheon: "Roman"
            role: "Mage"
            attack: "ranged"
            power: "magical"
            description: "smith of the gods"
            traits: [HIGH_AREA_DAMAGE, PUSHER]
            releaseNumber: 29
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

gql`
    mutation {
        createGod(
            name: "Xbalanque"
            pantheon: "Mayan"
            role: "Hunter"
            attack: "ranged"
            power: "physical"
            description: "hidden jaguar sun"
            traits: [HIGH_SINGLE_TARGET_DAMAGE, MEDIUM_AREA_DAMAGE]
            releaseNumber: 27
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

gql`
    mutation {
        createGod(
            name: "Xing Tian"
            pantheon: "Chinese"
            role: "Guardian"
            attack: "melee"
            power: "magical"
            description: "the relentless"
            traits: [HIGH_CROWD_CONTROL]
            releaseNumber: 69
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

gql`
    mutation {
        createGod(
            name: "Ymir"
            pantheon: "Norse"
            role: "Guardian"
            attack: "melee"
            power: "magical"
            description: "father of the frost giants"
            traits: [HIGH_CROWD_CONTROL, HIGH_DEFENSE]
            releaseNumber: 16
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

gql`
    mutation {
        createGod(
            name: "Zeus"
            pantheon: "Greek"
            role: "Mage"
            attack: "ranged"
            power: "magical"
            description: "god of the sky"
            traits: [HIGH_AREA_DAMAGE]
            releaseNumber: 17
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

gql`
    mutation {
        createGod(
            name: "Zhong Kui"
            pantheon: "Chinese"
            role: "Mage"
            attack: "ranged"
            power: "magical"
            description: "the demon queller"
            traits: [HIGH_AREA_DAMAGE, MEDIUM_CROWD_CONTROL]
            releaseNumber: 41
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
