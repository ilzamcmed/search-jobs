import React from 'react';
import Button from '../../Atoms/Button/Button';
import Input from '../../Atoms/Input/Input';

import './SearchBar.css'


const SearchBar = ({texto, onClick, type, placeholder, value, onChange}) => {
    return(

        <div className="searchBar--container">

            <Input 
                onChange={onChange} 
                type={type} 
                placeholder={placeholder} 
                value={value}/>

            <Button 
                texto={texto} 
                onClick={onClick}/>
        </div>

    )
}

export default SearchBar;