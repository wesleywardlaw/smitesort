import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Grid, Transition } from 'semantic-ui-react';

import { AuthContext } from '../context/auth';
import GodCard from '../components/GodCard';
// import PostForm from '../components/PostForm';
import { FETCH_GODS_QUERY } from '../util/graphql';

function Home() {
    const { user } = useContext(AuthContext);
    const { loading, data } = useQuery(FETCH_GODS_QUERY, {
        variables: {}
    });

    return (
        <Grid columns={3}>
            <Grid.Row>
                {loading ? (
                    <h1>Loading gods..</h1>
                ) : (
                    <Transition.Group>
                        {data &&
                            data.getGods.map(god => (
                                <Grid.Column
                                    key={god.id}
                                    style={{ marginBottom: 20 }}
                                >
                                    <GodCard god={god} />
                                </Grid.Column>
                            ))}
                    </Transition.Group>
                )}
            </Grid.Row>
        </Grid>
    );
}

export default Home;
