import { useState } from 'react';
import { MediaCard } from '@shopify/polaris';


const ImageCard = ({item}) => {
  const cachedLikeStatus = sessionStorage.getItem(`imgItem-${item.id}`)
  const imgAlt = `Illustration of ${item.title}, sourced from NASA`


  const [likedStatus, toggleLikeStatus] = useState( cachedLikeStatus ? cachedLikeStatus : 'Like' )

  const handleclick = () => {
    if (likedStatus === 'Like') {
      toggleLikeStatus('Liked')
      sessionStorage.setItem(`imgItem-${item.id}`, 'Liked')
    } else {
      toggleLikeStatus('Like')
      sessionStorage.setItem(`imgItem-${item.id}`, 'Like')
    }
  }

  return (
  < MediaCard
    title = { `${item.title} | ${item.date}` }
    primaryAction = {{
      content: likedStatus,
      onAction: handleclick,
    }}
    description={`${item.explanation}`} 
    accessibilityLabel={`${likedStatus} image on click`} 

  >
    <img
      alt={imgAlt}
      width="100%"
      height="100%" 
      style={{ objectFit: 'cover', objectPosition: 'center', }}
      src={item.url}
    />
  </MediaCard >
  )
}

export default ImageCard