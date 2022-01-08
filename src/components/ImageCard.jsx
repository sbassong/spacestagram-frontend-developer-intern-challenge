import {Card, Image, Button, TextContainer } from '@shopify/polaris';

const ImageCard = ({item}) => {
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
        <Button>Like</Button>
      </Card.Section>
    </Card>
  )
}

export default ImageCard
