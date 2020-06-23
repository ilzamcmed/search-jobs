import React from 'react';
import CompanyInfos from '../CompanyInfos/CompanyInfos'
import './Card.css';
import RoleInfos from '../RoleInfos/RoleInfos';


const Card = ({ logo, company, position, postedAd, contract, location, languages, tools }) => {
    return (
        <div className="card--container">
            <CompanyInfos
                logo={logo}
                company={company}
                position={position}
                postedAd={postedAd}
                contract={contract}
                location={location}
            />
            <RoleInfos 
                languages={languages}
                tools={tools}
            />
        </div>
    )
}

export default Card;