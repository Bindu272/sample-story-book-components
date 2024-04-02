import React from 'react'
import './Alert.css'

export interface AlertProps{
    type:'Success' | 'info' | 'warning' | 'error'
    message:string
}

export const Alert=({type, message}:AlertProps)=>{
    return (
        <div className={`alert alert-${type}`}>{message}</div>
    )
}