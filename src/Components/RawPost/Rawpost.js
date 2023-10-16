import React, {useState, useEffect}from 'react'
import './Rawpost.css';
import axios from '../axios'
import { imageUrl } from '../Constants/Constants';
function Rawpost(props) {
    const[movies,setMovies]= useState([])
    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data);
            setMovies(response.data.results);
        });
    }, [props.url]); // Add props.url as a dependency
    
    
    
  return (
    <div className='raw'>
        <h2 style={{color:'white'}}>{props.title}</h2>
        <div className='poster'>
            {movies.map((obj)=>
                <img className={props.isSmall? 'smallposter':'posters'} alt='poster' src={`${imageUrl+obj.backdrop_path}`}/>
             )}
            
           

        </div>
    </div>
  )
}

export default Rawpost