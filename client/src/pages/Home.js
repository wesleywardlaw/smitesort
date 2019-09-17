import React, { useState, useEffect, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Grid, Transition } from 'semantic-ui-react';

import { AuthContext } from '../context/auth';
import GodCard from '../components/GodCard';
import Filter from '../components/Filter';
import { FETCH_GODS_QUERY } from '../util/graphql';

function Home(props) {
    const { user, showlikes, setshowlikes } = useContext(AuthContext);
    const [width, setWidth] = useState(window.innerWidth);
    const [filter, setFilter] = useState({ traits: [] });
    // const [showlikes, setshowlikes] = useState(false);

    const { loading, data, refetch, error } = useQuery(FETCH_GODS_QUERY, {
        // fetchPolicy: 'cache-and-network',
        errorPolicy: 'all',

        onError() {
            // refetch();
        },
        variables: {
            traits: filter.traits,
            pantheon: filter.pantheon,
            role: filter.role
        }
    });

    // resizing the window changes width variable, which changes the number of columns
    const resizeWidth = () => {
        setWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', resizeWidth);
        return () => window.removeEventListener('resize', resizeWidth);
    });

    //separate array of likedGods to map over
    let likedGods;
    if (data && data.getGods !== null && user) {
        likedGods = data.getGods.filter(god =>
            god.likes.some(like => like.username === user.username)
        );
    }

    const change = newFilter => {
        setFilter(newFilter);
    };

    if (
        (data && data.getGods === null) ||
        (error && error.graphQLErrors[0].message)
    ) {
        return (
            <>
                <div style={{ width: '100%' }}>
                    <Filter
                        change={change}
                        filter={filter}
                        showlikes={showlikes}
                        setshowlikes={setshowlikes}
                        user={user}
                        refetch={refetch}
                    />
                </div>
                <div>No gods match this search.</div>
            </>
        );
    }
    //width < 768 ? 1 : 3

    return (
        <Grid columns={width < 768 ? 1 : 3}>
            <Grid.Row>
                {loading ? (
                    <h1>Loading gods..</h1>
                ) : (
                    <>
                        <div
                            style={{
                                width: '100%',
                                textAlign: 'center'
                            }}
                        >
                            <Filter
                                change={change}
                                filter={filter}
                                setshowlikes={setshowlikes}
                                showlikes={showlikes}
                                user={user}
                                refetch={refetch}
                            />
                        </div>

                        <Transition.Group>
                            {data && showlikes === false ? (
                                data.getGods.map(god => (
                                    <Grid.Column
                                        key={god.id}
                                        style={{ marginBottom: 20 }}
                                    >
                                        <GodCard god={god} />
                                    </Grid.Column>
                                ))
                            ) : data && likedGods && likedGods.length !== 0 ? (
                                likedGods.map(god => (
                                    <Grid.Column
                                        key={god.id}
                                        style={{ marginBottom: 20 }}
                                    >
                                        <GodCard god={god} />
                                    </Grid.Column>
                                ))
                            ) : (
                                <span>No gods match this search.</span>
                            )}
                        </Transition.Group>
                    </>
                )}
            </Grid.Row>
        </Grid>
    );
}

export default Home;
