import React from 'react'
import './Card.css'

interface CardProps{
    title:string;
    content:string;
    onClick?:()=> void;
}

export const Card=({title, content, onClick}:CardProps)=>{
    return(
        <div className='storybook-card' onClick={onClick}>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}