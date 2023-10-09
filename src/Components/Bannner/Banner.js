import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className="banner">
        <div className="content">
            <h1 className="title">Money Heist Season 4</h1>
            <div className="bannerbuttons">
                <button className="button">Play</button>
                <button className="button">My List</button>
            </div>
            <h1 className="description">While Tokyo stages a coup d'état and takes over command from Palermo, the Professor and Marseille deduce that Lisbon must still be alive and being interrogated by Sierra in the police command post tent outside the bank..</h1>
        </div>
        <div className="fade_bottom">

        </div>
    </div>
  )
  }

export default Banner