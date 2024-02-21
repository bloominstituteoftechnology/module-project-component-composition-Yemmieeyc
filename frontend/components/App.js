// import React from 'react'
// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import Header from './Header'
// import Footer from './Footer'
// import NasaPhoto from './NasaPhoto'
// import DateSelector from './DateSelector'
// import styled from 'styled-components';
// const Main = styled.div`
// display: flex;
// justify-content: center;
// flex-direction: column;
// align-items: center;
// `
// function App() {
//   const [photoData, setPhotoData] = useState(null);
//   const [date, setDate] = useState('');
//   useEffect(() => {
//     axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
//       .then(res => {
//         setPhotoData(res.data);
//         console.log(res.data)
//       }).catch(err => console.error(err))
//   }, [date]);
//   if (!photoData) return <h3>Loading...</h3>;
//   const handleSelect = (date) => {
//     setDate(date)
//   }
//   return (
//     <Main>
//       <DateSelector passedDateProp={handleSelect} />
//       <Header date={photoData.date} />
//       <NasaPhoto title={photoData.title} url={photoData.url} />
//       <Footer title={photoData.title} copyright={photoData.copyright} explanation={photoData.explanation} />
//     </Main>
//   )
// }
// export default App






import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'

//const api_key = 'DEMO_KEY'
const URL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

function App() {
  const [apod, setApod] = useState()
  useEffect(() => {
    function fetchPhoto () {
      axios.get(URL)
      .then(res => {
        console.log(res.data)
        setApod(res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
    }
     //fetchPhoto()
  
  setApod({
      "date": "2024-02-21",
      "explanation": "The bird is bigger than the peak.  Nicknamed for its avian shape, the Seagull Nebula is an emission nebula on the night sky that is vast, spanning an angle over five times the diameter of the full moon and over 200 light years.  The head of the nebula is catalogued as IC 2177, and the star cluster under its right wing is catalogued as NGC 2343. Consisting of mostly red-glowing hydrogen gas, the Seagull Nebula incorporates some dust lanes and is forming stars.  The peak over which this Seagull se...",
      "hdurl": "https://apod.nasa.gov/apod/image/2402/SeagullPinnacles_Venkatraman_2051.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Seagull Nebula over Pinnacles' Peak",
      "url": "https://apod.nasa.gov/apod/image/2402/SeagullPinnacles_Venkatraman_960.jpg"
    })   
  }, [])
  if (!apod) return 'Fetching Photo of the Day...'
  return (
    <section>
     <Card 
     title={apod.title}
     text={apod.explanation}
     imageUrl={apod.url}
     date={apod.date}
     />
    </section>
  )
}

export default App
