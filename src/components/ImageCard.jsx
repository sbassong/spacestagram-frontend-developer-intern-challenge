import { useState } from 'react';
import { MediaCard } from '@shopify/polaris';


const ImageCard = ({item}) => {
  const {title, date, id, explanation, url} = item
  const cachedLikeStatus = sessionStorage.getItem(`imgItem-${id}`)
  const imgAlt = `Illustration of ${title}, sourced from NASA`


  const [likedStatus, toggleLikeStatus] = useState( cachedLikeStatus ? cachedLikeStatus : 'Like' )

  const handleclick = () => {
    if (likedStatus === 'Like') {
      toggleLikeStatus('Liked')
      sessionStorage.setItem(`imgItem-${id}`, 'Liked')
    } else {
      toggleLikeStatus('Like')
      sessionStorage.setItem(`imgItem-${id}`, 'Like')
    }
  }

  return (
  < MediaCard
    title = { `${title} | ${date}` }
    primaryAction = {{
      content: likedStatus,
      onAction: handleclick,
    }}
    description={`${explanation}`} 
    accessibilityLabel={`${likedStatus} image on click`} 

  >
    <img
      alt={imgAlt}
      width="100%"
      height="100%" 
      style={{ objectFit: 'cover', objectPosition: 'center', }}
      src={url}
    />
  </MediaCard >
  )
}

export default ImageCard