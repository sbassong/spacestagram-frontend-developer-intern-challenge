import { useState, useEffect } from 'react';
import './styles/App.css';
import { Page } from '@shopify/polaris';
import Axios from 'axios'
import ImageCard from './components/ImageCard';


function App() {
  const [apiImages, setApiImages] = useState([])
  const API_KEY = process.env.REACT_APP_NASA_API_KEY

  const getImagesFromAPI = async () => {
    const results = await Axios.get(`https://api.nasa.gov/planetary/apod?count=10&api_key=${API_KEY}`)
    setApiImages(results.data)
  }

  useEffect(()=> {
    getImagesFromAPI()
  }, [])

  return (
    <Page
    narrowWidth
    className='App'
    title='Spacetagram' 
    subtitle={`Explore the universe with NASA' APOD API`}
    >
    {apiImages.length > 0 && apiImages.map((item, index) => (
      <ImageCard key={index} item={item} />
    ))}

    </Page>
  );
}

export default App;