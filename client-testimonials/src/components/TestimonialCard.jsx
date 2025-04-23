import React from "react";
import './TestimonialCard.css';

export default function TestimonialCard({name,review}){
    return(
        <div className="card">
            <h1 className="name">{name}</h1>
            <p className="review">{review}</p>
        </div>
    )
}