import React from 'react';
import './RoleInfos.css';

const RoleInfos = ({ languages, tools }) => {
    return (

        <div className="roleInfos--container">

            {languages && languages.map(linguagens => {
                return (
                    <div>
                        <h4> {linguagens} </h4>
                    </div>
                );
            })}

            {tools && tools.map(ferramentas => {
                return (
                    <div>
                        <h4> {ferramentas} </h4>
                    </div>
                );
            })}

        </div>
    )
}

export default RoleInfos;