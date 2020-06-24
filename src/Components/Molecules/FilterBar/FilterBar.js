import React from 'react';

import './FilterBar.css';
import FilterButton from '../../Atoms/FilterButton/FilterButton';

const FilterBar = ({ filters, onClick }) => {
    return (
        <div className="filterBar--container">
            <FilterButton
                filters={filters}
                onClick={onClick}
            />
        </div>
    )
}

export default FilterBar;