import { useState, useLayoutEffect } from 'react';
import './styles/App.css';
import { Page, Frame, Loading } from '@shopify/polaris';
import Axios from 'axios';
import ImageCard from './components/ImageCard';

const API_KEY = process.env.REACT_APP_NASA_API_KEY

function App() {
  const [apiImages, setApiImages] = useState([] || JSON.parse(sessionStorage.getItem('apiImages')))

  const reqURL = `https://api.nasa.gov/planetary/apod?count=5&api_key=${API_KEY}`
  const pageSubtitle=`Explore the universe with NASA' APOD API`
  const pageTitle='Spacetagram' 
  const loader = (
  <Frame> 
    <Loading />
  </Frame>
  )

  const getImagesFromAPI = async () => {
    try {
      let count = 1
      const results = await Axios.get(reqURL)
      const resultsWithID = results.data.map(item => {
        item['id'] = count
        count++
        return item
      })
      setApiImages(resultsWithID)
      sessionStorage.setItem('apiImages', JSON.stringify(resultsWithID))
    } catch (error) {
      throw error
    }
  }


  useLayoutEffect(()=> {
    sessionStorage.getItem('apiImages') 
    ? setApiImages(JSON.parse(sessionStorage.getItem('apiImages')))
    : getImagesFromAPI()
  }, [])

  return (
    <Page
      narrowWidth
      className='App'
      title={pageTitle}
      subtitle={pageSubtitle}
    >
      {
        apiImages.length > 0 
        ? apiImages.map(item =>  <ImageCard key={item.id} item={item} />)
        : loader
      }
    </Page>
  );
}

export default App;