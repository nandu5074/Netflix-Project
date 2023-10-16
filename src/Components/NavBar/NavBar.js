import React from 'react';
import "./NavBar.css";
import { useState } from 'react';

function NavBar() {
    const[query,setQuery]= useState('')
    console.log(query);
  return (
    <div className='NavBar'>
        <img className="logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt='NetFlix Logo'/>
        <form class='Search'>
        <input type='text' placeholder='Search for a genre..' onChange={(e)=>setQuery(e.target.value)}/>
        <button type='Submit'>Search</button>
        </form>
        <img className="avatar" src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt='avatar'/>

    </div>
  )
}

export default NavBar