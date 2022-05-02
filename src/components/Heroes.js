import React from "react";
import heroesimg from '../imgs/peoples.png'

export default function Heroes() {
  return (
    <div className="heroes">
      <img className="heroes--img" src={heroesimg} alt='peoples'/>
      <div className="heroes--info">
        <h1 className="heroes--title">Online Experiences</h1>
        <p className="heroes--subtext">Join unique interactive activities led by one-of-a-kind hosts—all 
        without leaving home.</p>
      </div>
    </div>
  )
}