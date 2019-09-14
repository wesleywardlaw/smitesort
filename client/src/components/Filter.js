import React from 'react';
import { Button } from 'semantic-ui-react';

const Filter = ({ change, filter }) => {
    const toggleTrait = toggled => {
        if (filter.traits && filter.traits.some(trait => trait === toggled)) {
            let newTraits = filter.traits.filter(trait => trait !== toggled);

            change({
                ...filter,
                traits: newTraits
            });
        } else if (filter.traits) {
            change({
                ...filter,
                traits: [...filter.traits, toggled]
            });
        } else {
            change({ ...filter, traits: [toggled] });
        }
    };

    // const togglePantheon = toggled => {

    // }
    const traits = [
        'high single target damage',
        'high mobility',
        'high area damage',
        'high movement speed',
        'high attack speed',
        'high sustain',
        'great jungler',
        'high crowd control',
        'medium crowd control',
        'high defense',
        'medium area damage',
        'pusher'
    ];

    const pantheons = [
        'Arthurian',
        'Chinese',
        'Celtic',
        'Egyptian',
        'Greek',
        'Hindu',
        'Japanese',
        'Mayan',
        'Norse',
        'Polynesian',
        'Roman',
        'Slavic',
        'Voodoo',
        'Yoruba'
    ];

    const roles = ['Guardian', 'Warrior', 'Hunter', 'Mage', 'Assassin'];
    return (
        <div>
            <Button onClick={() => change({ traits: [] })}>All</Button>
            {traits.map(trait => {
                return (
                    <Button
                        style={{ marginBottom: '10px' }}
                        key={trait}
                        onClick={() => {
                            toggleTrait(trait);
                        }}
                    >
                        {trait}
                    </Button>
                );
            })}
            {pantheons.map(pantheon => {
                return (
                    <Button
                        style={{ marginBottom: '10px' }}
                        key={pantheon}
                        onClick={() => {
                            change({ ...filter, pantheon: pantheon });
                        }}
                    >
                        {pantheon}
                    </Button>
                );
            })}
            {roles.map(role => {
                return (
                    <Button
                        style={{ marginBottom: '10px' }}
                        key={role}
                        onClick={() => {
                            change({ ...filter, role: role });
                        }}
                    >
                        {role}
                    </Button>
                );
            })}
        </div>
    );
};

export default Filter;
