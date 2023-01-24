import React from "react";
import { BsThreeDots, BsFillHeartFill } from "react-icons/bs";
import {SlPaperPlane} from "react-icons/sl";
import "./card.css"


export default function InstaCard({user}){
    return <section className="card">
        <h3 className="name"> {user.name}</h3>
        <address className="location">{user.location}</address>
        <BsThreeDots className="dots"/>
        <img className="image" src={user.PostImage} alt="postimg"/>
        <BsFillHeartFill className="heart"></BsFillHeartFill>
        <SlPaperPlane className="plane"></SlPaperPlane>
        <time className="data">{user.date}</time>
        <sub className="likes">{user.likes}likes</sub>
        <div className="discription">{user.description}</div>
    </section>
}