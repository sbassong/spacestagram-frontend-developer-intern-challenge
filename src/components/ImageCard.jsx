import { useState } from 'react';
import { MediaCard } from '@shopify/polaris';


const ImageCard = ({item}) => {
  const cachedLikeStatus = sessionStorage.getItem(`imgItem-${item.id}`) 
  const [likedStatus, toggleLikeStatus] = useState( cachedLikeStatus ? cachedLikeStatus : 'Like' )
  
  // const likeStatus = () => JSON.parse(sessionStorage.getItem(`imgItem-${item.id}`))

  const handleclick = () => {
    if (likedStatus === 'Like') {
      toggleLikeStatus('Liked')
      sessionStorage.setItem(`imgItem-${item.id}`, 'Liked')
      // sessionStorage.setItem(`imgItem-${item.id}`, 'false')
    } else {
      toggleLikeStatus('Like')
      sessionStorage.setItem(`imgItem-${item.id}`, 'Like')
      // sessionStorage.setItem(`imgItem-${item.id}`, 'true')
    }
  }

  return (
  < MediaCard
    title = { `${item.title} | ${item.date}` }
    primaryAction = {{
      content: likedStatus,
      // content: `${sessionStorage.getItem(`imgItem-${item.id}`) === 'true' ? 'Liked' : 'Like'}`,
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