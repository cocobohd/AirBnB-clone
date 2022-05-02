import React from "react";
import starimg from '../imgs/Star.png'



export default function Card(props) {
  let badgeText 
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE"
  } 


  return(
    <div className="card"> 
    {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.item.coverImg} className="card--img" alt="man"/>
      <div className="card--raiting">
        <img src={starimg} alt='star'/>
        <p className="card--raiting--number">{props.item.stats.rating}</p>
        <p className="card--raiting--country">({props.item.stats.reviewCount})  • |</p>
        <p className="card--raiting--country">{props.item.location}</p>
      </div>
      <p className="card--subtext">{props.item.title}</p>
      <p className="card--price"><span className="price">From ${props.item.price} / </span>person</p>
    </div>
  )
}