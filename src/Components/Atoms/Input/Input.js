import React from 'react';
import './Input.css';

const Input = ({type, placeholder, value, onChange}) => {
    return (
        <input 
        onChange={onChange} 
        type={type} 
        placeholder={placeholder} 
        value={value}/>
    )
}

export default Input;