import { useState } from 'react';
import { MediaCard } from '@shopify/polaris';

const ImageCard = ({item}) => {
  const [clicked, toggleClicked] = useState(false)
  // const [liked, toggleliked] = useState('Like')

  const handleclick = async() => {
    if (clicked) {
      toggleClicked(false)
      sessionStorage.setItem(`item${item.id}`, 'false')
    } else {
      toggleClicked(true)
      sessionStorage.setItem(`item${item.id}`, 'true')
    }
  }

  return (
  < MediaCard
    title = { `${item.title} | ${item.date}` }
    primaryAction = {{
      content: `${sessionStorage.getItem(`item${item.id}`) === 'true' ? 'Liked' : 'Like'}`,
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