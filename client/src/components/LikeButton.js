import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Button, Icon } from 'semantic-ui-react';

import MyPopup from '../util/MyPopup';

function LikeButton({ user, god: { id, likes } }) {
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        if (user && likes.find(like => like.username === user.username)) {
            setLiked(true);
        } else {
            setLiked(false);
        }
    }, [user, likes]);

    const [likeGod] = useMutation(LIKE_GOD_MUTATION, {
        variables: { id }
    });

    const likeButton = user ? (
        liked ? (
            <Button color="teal">
                <Icon name="thumbs up" />
            </Button>
        ) : (
            <Button color="teal" basic>
                <Icon name="thumbs up" />
            </Button>
        )
    ) : (
        <Button as={Link} to="/login" color="teal" basic>
            <Icon name="thumbs up" />
        </Button>
    );

    return (
        <Button as="div" labelPosition="right" onClick={likeGod}>
            <MyPopup content={liked ? 'Unlike' : 'Like'}>{likeButton}</MyPopup>
        </Button>
    );
}

const LIKE_GOD_MUTATION = gql`
    mutation likeGod($id: ID!) {
        likeGod(id: $id) {
            id
            likes {
                id
                username
            }
        }
    }
`;

export default LikeButton;
