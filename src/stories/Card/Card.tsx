import React from 'react'
import './Card.css'
import { Button } from '../Button/Button';

interface CardProps{
    title:string;
    content:string;
    onClick?:()=> void;
    imageUrl:string;
    btnText:string,
    color:string,
    backgroundColor:string,
}

export const Card=({title, content, onClick, imageUrl, btnText,color, backgroundColor}:CardProps)=>{
    return(
        <div className='storybook-card' onClick={onClick}>
            <img src={imageUrl} alt={title} className='storybook-card-image'/>
            <div className="storybook-card-content">
            <h2>{title}</h2>
            <p>{content}</p>
            <button className="storybook-card-button" onClick={onClick} style={{color, backgroundColor}}>{btnText}</button>
          </div>
        </div>
    )
}