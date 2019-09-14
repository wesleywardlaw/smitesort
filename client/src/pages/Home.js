import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Grid, Transition } from 'semantic-ui-react';

// import { AuthContext } from '../context/auth';
import GodCard from '../components/GodCard';
import Filter from '../components/Filter';
// import PostForm from '../components/PostForm';
import { FETCH_GODS_QUERY } from '../util/graphql';

function Home() {
    // const { user } = useContext(AuthContext);
    const [width, setWidth] = useState(window.innerWidth);
    const [filter, setFilter] = useState({ traits: [] });
    // console.log(filter);
    // console.log(filter.traits);

    const { loading, data, refetch } = useQuery(FETCH_GODS_QUERY, {
        fetchPolicy: 'cache-and-network',
        errorPolicy: 'ignore',
        variables: {
            traits: filter.traits,
            pantheon: filter.pantheon,
            role: filter.role
        }
    });

    const resizeWidth = () => {
        setWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', resizeWidth);
        return () => window.removeEventListener('resize', resizeWidth);
    });

    let { traits } = filter;

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
                            <Filter change={change} filter={filter} />
                        </div>

                        <Transition.Group>
                            {data.getGods.map(god => (
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
