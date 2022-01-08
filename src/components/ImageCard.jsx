import { useState } from 'react';
import { MediaCard } from '@shopify/polaris';
// import {Card, Image, TextContainer } from '@shopify/polaris';
// import LikeButton from './LikeButton'

const ImageCard = ({item}) => {
  const [liked, toggleLiked] = useState(false)

  const handleclick = () => {
    liked ? toggleLiked(false) : toggleLiked(true)
  }

  return (
    // <Card>
    //   <Card.Section flush>
    //     <Image
    //       source={item.image}
    //       alt={`Illustration of ${item.title}, sourced from NASA`}
    //     />
    //   </Card.Section>
    //   <Card.Section title={item.title}>
    //     <p>Earth_date of capture: {item.date}</p>
    //     <TextContainer>
    //       {item.description}
    //     </TextContainer>
    //     <LikeButton />
    //   </Card.Section>
    // </Card>

  < MediaCard
    title = { `${item.title} - ${item.date}` }
    subtitle = { `Author: ${item.copyright}`}
    primaryAction = {{
      content: `${item.description}`,
      onAction: handleclick,
      }}
    description = "Discover how Shopify can power up your entrepreneurial journey."
      >
      <img
        alt={`Illustration of ${item.title}, sourced from NASA`}
        width="100%"
        height="100%"
        style={{ objectFit: 'cover', objectPosition: 'center', }}
        src={item.hdurl}
      />
  </MediaCard >
  )
}

export default ImageCard