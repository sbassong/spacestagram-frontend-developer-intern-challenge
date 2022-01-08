import { useState } from 'react';
import { Button } from '@shopify/polaris';

const LikeButton = () => {
  const [liked, toggleLiked] = useState(false)

  const handleclick = () => {
    liked ? toggleLiked(false) : toggleLiked(true)
  }

  return (
    <Button
      onClick={handleclick}
      className={liked && `liked`}
    >
      Like
    </Button>
  )
}

export default LikeButton