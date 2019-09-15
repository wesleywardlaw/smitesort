import React, { useState, useEffect, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Grid, Transition } from 'semantic-ui-react';

import { AuthContext } from '../context/auth';
import GodCard from '../components/GodCard';
import Filter from '../components/Filter';
import { FETCH_GODS_QUERY } from '../util/graphql';

function Home() {
    const { user } = useContext(AuthContext);
    const [width, setWidth] = useState(window.innerWidth);
    const [filter, setFilter] = useState({ traits: [] });
    const [showlikes, setshowlikes] = useState(false);

    const { loading, data, refetch } = useQuery(FETCH_GODS_QUERY, {
        fetchPolicy: 'cache-and-network',
        errorPolicy: 'ignore',
        onError(error) {
            console.log(error);
        },
        variables: {
            traits: filter.traits,
            pantheon: filter.pantheon,
            role: filter.role
        }
    });

    //resizing the window changes width variable, which changes the number of columns
    const resizeWidth = () => {
        setWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', resizeWidth);
        return () => window.removeEventListener('resize', resizeWidth);
    });

    //separate array of likedGods to map over
    let likedGods;
    if (data && user) {
        likedGods = data.getGods.filter(god =>
            god.likes.some(like => like.username === user.username)
        );
    }

    const change = newFilter => {
        setFilter(newFilter);
        refetch();
    };

    if (data && data.getGods === null) {
        return (
            <>
                <div style={{ width: '100%' }}>
                    <Filter change={change} filter={filter} />
                </div>
                <div>No gods match this search.</div>
            </>
        );
    }

    return (
        <Grid columns={width < 768 ? 1 : 3}>
            <Grid.Row>
                {loading ? (
                    <h1>Loading gods..</h1>
                ) : (
                    <>
                        <div style={{ width: '100%', textAlign: 'center' }}>
                            <Filter
                                change={change}
                                filter={filter}
                                setshowlikes={setshowlikes}
                                showlikes={showlikes}
                                user={user}
                            />
                        </div>

                        <Transition.Group>
                            {showlikes === false
                                ? data.getGods.map(god => (
                                      <Grid.Column
                                          key={god.id}
                                          style={{ marginBottom: 20 }}
                                      >
                                          <GodCard god={god} />
                                      </Grid.Column>
                                  ))
                                : likedGods.map(god => (
                                      <Grid.Column
                                          key={god.id}
                                          style={{ marginBottom: 20 }}
                                      >
                                          <GodCard god={god} />
                                      </Grid.Column>
                                  ))}
                        </Transition.Group>
                    </>
                )}
            </Grid.Row>
        </Grid>
    );
}

export default Home;
