import React from 'react';
import { Button } from 'semantic-ui-react';

const Filter = ({ change, filter, setshowlikes, user, showlikes, refetch }) => {
    const toggleTrait = toggled => {
        document.activeElement.blur();
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

    const renderAllClass = () => {
        return filter.traits.length === 0 &&
            Object.keys(filter).length === 1 &&
            showlikes === false
            ? 'selected'
            : '';
    };

    const renderTraitClass = trait => {
        if (
            filter.traits &&
            filter.traits.some(filterTrait => filterTrait === trait)
        ) {
            return 'selected';
        } else {
            return '';
        }
    };

    const renderOtherClass = (toggledName, toggledValue) => {
        return filter[toggledName] === toggledValue ? 'selected' : '';
    };

    const renderLiked = () => {
        if (user) {
            return (
                <Button
                    className={renderLikedClass()}
                    onClick={() => {
                        // refetch();

                        setshowlikes(!showlikes);
                        document.activeElement.blur();
                    }}
                >
                    Liked
                </Button>
            );
        }
    };

    const renderLikedClass = () => {
        return showlikes ? 'selected' : '';
    };

    return (
        <div>
            <Button
                className={renderAllClass()}
                onClick={() => {
                    document.activeElement.blur();
                    change({ traits: [] });
                }}
            >
                All
            </Button>
            {renderLiked()}
            {traits.map(trait => {
                return (
                    <Button
                        className={renderTraitClass(trait)}
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
                        className={renderOtherClass('pantheon', pantheon)}
                        style={{ marginBottom: '10px' }}
                        key={pantheon}
                        onClick={() => {
                            document.activeElement.blur();
                            if (filter.pantheon === pantheon) {
                                const { pantheon, ...newFilter } = filter;
                                change({ ...newFilter });
                            } else {
                                change({ ...filter, pantheon: pantheon });
                            }
                        }}
                    >
                        {pantheon}
                    </Button>
                );
            })}
            {roles.map(role => {
                return (
                    <Button
                        className={renderOtherClass('role', role)}
                        style={{ marginBottom: '10px' }}
                        key={role}
                        onClick={() => {
                            document.activeElement.blur();
                            if (filter.role === role) {
                                const { role, ...newFilter } = filter;
                                change({ ...newFilter });
                            } else {
                                change({ ...filter, role: role });
                            }
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
