import React from 'react'
import CareersList from './CareerSection/CareersList'
import CareerBanner from './CareerSection/CareerBanner'

const Career = () => {
  return (
    <div className='resp-extra-pdg container pt-40 pb-40 md:pb-80'>
        <CareerBanner/>
        <CareersList/>
    </div>
  )
}

export default Career