import React, { useContext } from 'react';
import { Button, Card, Icon, Label, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import moment from 'moment';

import { AuthContext } from '../context/auth';
import LikeButton from './LikeButton';

function GodCard({
    god: { name, pantheon, role, attack, power, description, traits, id, likes }
}) {
    // console.log(likes);
    // console.log(id);
    const { user } = useContext(AuthContext);
    return (
        <Card fluid style={{ textTransform: 'uppercase' }}>
            <Card.Content>
                <Image
                    className="scaled"
                    size="massive"
                    src={`/images/${name
                        .toLowerCase()
                        .replace("'", '')
                        .replace(/\s/g, '-')}.jpg`}
                />
                <Card.Header
                    style={{
                        textAlign: 'center',
                        marginTop: '20px',
                        textTransform: 'uppercase'
                    }}
                >
                    {name}
                </Card.Header>
                <ul id="cardlist" style={{ listStyleType: 'none' }}>
                    <li>{pantheon}</li>
                    <li>{role}</li>
                    <li>{attack}</li>
                    <li>{power}</li>
                    {traits.map(trait => {
                        return <li key={trait}>{trait}</li>;
                    })}
                </ul>

                <Card.Description style={{ textAlign: 'center' }}>
                    {description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <LikeButton user={user} god={{ id, likes }} />
            </Card.Content>
        </Card>
    );
}

export default GodCard;
