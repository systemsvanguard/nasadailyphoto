// src/components/NASAAstronomyPhoto.js 
import React, { useState, useEffect} from 'react'
const apiKey = process.env.REACT_APP_API_KEY;

const NASAAstronomyPhoto = () => {
    const [apodData, setAPODData ] = useState(null)

    useEffect(() => {
        getPhoto() 

        /*
         API target: https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY  
        // change the key of course. 
        // Note that keys in React.js .env files must start with 'REACT_APP_' 
        */
        async function getPhoto() {
          const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
          const data = await res.json()
          setAPODData(data)
        }
    }, [])
    if (!apodData) return <div />

  return (
    <div className='picAPOD'>
        {/* NASA's API will sometimes send us a video for the static image, so we need to code for that */}
        {apodData.media_type === "image" ? (
        <img src={apodData.url} alt={apodData.title} className='apodPicture' />
        ) : (
        <iframe
            title="space-video" src={apodData.url} frameBorder="0"
            gesture="media" allow="encrypted-media"
            allowFullScreen className="apodPicture"
        />
        )}

        <h2 className='apodTitle'>{apodData.title}</h2>
        <div className='divider'></div>
        <p className='pageContent'>Date: <strong>{apodData.date}</strong> - Image Credits & Copyright : <em>{apodData.copyright} </em>
          <br />       
        {apodData.explanation} 
        </p>
    </div>
  )
}

export default NASAAstronomyPhoto 