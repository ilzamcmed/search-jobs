import React from 'react';

import './MainTitle.css';

const MainTitle = ({ mainTitle }) => {
    return (
        <div className="mainTitle--container">
            <h1>{mainTitle}</h1>
        </div>
    )
}

export default MainTitle;