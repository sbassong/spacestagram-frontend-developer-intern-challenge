import { useState } from 'react';
import { MediaCard } from '@shopify/polaris';

const ImageCard = ({item}) => {
  const [liked, toggleLiked] = useState(false)

  const handleclick = () => {
    liked ? toggleLiked(false) : toggleLiked(true)
  }

  return (
  < MediaCard
    title = { `${item.title} | ${item.date}` }
    primaryAction = {{
      content: `${liked ? 'Liked' : 'Like'}`,
      onAction: handleclick,
      }}
      description= {`${item.explanation}`}
      >
      <img
        alt={`Illustration of ${item.title}, sourced from NASA`}
        width="100%"
        height="100%"
        style={{ objectFit: 'cover', objectPosition: 'center', }}
        src={item.url}
      />
  </MediaCard >
  )
}

export default ImageCard