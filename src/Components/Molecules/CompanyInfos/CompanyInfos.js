import React from 'react';
import './CompanyInfos.css';

const CompanyInfos = ({ logo, company, position, postedAd, contract, location }) => {
    return (
        <div className="companyInfos--container">
            <img src={logo} alt={`${company}--logo`} />
            <h3> {company} </h3>
            <h2> {position} </h2>
            <div>
                <h3> {postedAd} </h3>
                <span />
                <h3> {contract} </h3>
                <span />
                <h3> {location} </h3>
            </div>
        </div>
    )
}

export default CompanyInfos;