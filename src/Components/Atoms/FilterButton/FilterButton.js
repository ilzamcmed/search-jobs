import React from 'react';

import './FilterButton.css'

const FilterButton = ({ filters, onClick }) => {
    return (
        <div className="filterButton--container">
            {filters.map(item => {

                return (
                    <div className="filterOptions--filter" onClick={onClick}>
                        <h3 id={item}>{item}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default FilterButton;