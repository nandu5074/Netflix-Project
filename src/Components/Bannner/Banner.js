import React, {useState, useEffect } from 'react'
import './Banner.css'
import axios from '../axios'
import { API_Key } from '../Constants/Constants'
import { imageUrl } from '../Constants/Constants'

function Banner() {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_Key}&language=en-US`).then((response)=>{
            console.log(response.data.results[Math.random()])
            setMovie(response.data.results.sort(function (a, b) { return 0.5 - Math.random() })[0])

        })
    
    }, [])
    
  return (
    <div style={{backgroundImage:`url(${imageUrl+movie.backdrop_path})`}} className="banner">
        <div className="content">
            <h1 className="title">{movie.title}</h1>
            <div className="bannerbuttons">
                <button className="button">Play</button>
                <button className="button">My List</button> 
            </div>
            <h1 className="description">{movie.overview}</h1>
        </div>
        <div className="fade_bottom">

        </div>
    </div>
  )
  }

export default Banner