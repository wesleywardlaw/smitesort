import React, { useContext } from 'react';
import { Card, Image } from 'semantic-ui-react';
import { AuthContext } from '../context/auth';
import LikeButton from './LikeButton';

function GodCard({
    god: { name, pantheon, role, attack, power, description, traits, id, likes } 
}) {
    const { user } = useContext(AuthContext);
    const imageName = name
    .toLowerCase()
    .replace("'", '')
    .replace(/\s/g, '-')
    const pngImages = ['achilles']
    const isPngAvailable = pngImages.includes(imageName)

    return (
        <Card fluid style={{ textTransform: 'uppercase' }}>
            <Card.Content>
                {/* replace apostrophes with nothing and replace spaces with dashes so god names match image file names */}
                <Image
                    className="scaled"
                    size="massive"
                    src={`/images/${imageName}.${isPngAvailable ? 'png' : 'jpg'}`}
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
