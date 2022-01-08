import { useState } from 'react';
import {Card, Image, Button, TextContainer } from '@shopify/polaris';

const ImageCard = ({item}) => {
  const [liked, toggleLiked] = useState(false)

  const handleclick = () => {
    liked ? toggleLiked(false) : toggleLiked(true)
  }

  return (
    <Card>
      <Card.Section flush>
        <Image
          source={item.image}
          alt={`Illustration of ${item.title}, sourced from NASA`}
        />
      </Card.Section>
      <Card.Section title={item.title}>
        <p>Earth_date of capture: {item.date}</p>
        <TextContainer>
          {item.description}
        </TextContainer>
        <Button 
          onClick={handleclick}
          className={liked && `liked`}
        >
          Like
        </Button>
      </Card.Section>
    </Card>
  )
}

export default ImageCard
