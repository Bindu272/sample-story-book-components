import React from "react";

export interface HeadingProps{
    level:number;
    text:string;
    color?:string
}

export const Heading =({level, text, color}:HeadingProps)=>{
    const Tag=`h${level}` as keyof JSX.IntrinsicElements;

    return(
        <Tag className={`storybook-heading storybook-heading--level-${level}`} style={{color}}>{text}</Tag>
    )
}