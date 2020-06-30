// src/pages/DailyPhoto.js 
import React from 'react'
import NASAAstronomyPhoto from '../components/NASAAstronomyPhoto'

const DailyPhoto = () => {
  return (
    <div className='content pageStyle'>
        <h4>NASA Astronomy Picture of the Day</h4>
        <NASAAstronomyPhoto />
        
        {/*
        <div className='divider'></div>
        <p className='pageContent'>Dead men tell no tales brigantine prow careen galleon hulk swab. Tack long clothes come about mizzenmast take a caulk lugger run a shot across the bow. Gun bilge water chase guns ballast Pirate Round cable bounty.</p> 
        */}
    </div>
  )
}

export default DailyPhoto 