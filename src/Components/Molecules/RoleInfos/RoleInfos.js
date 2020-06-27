import React from 'react';
import './RoleInfos.css';

const RoleInfos = ({ languages, tools }) => {
    return (

        <div className="role--infos">

            {languages && languages.map((linguagens, index) => {
                return (
                    <div key={`${index + 1}--linguagem`}>
                        <h4> {linguagens} </h4>
                    </div>
                );
            })}

            {tools && tools.map((ferramentas, index) => {
                return (
                    <div key={`${index + 1}--ferramentas`}>
                        <h4> {ferramentas} </h4>
                    </div>
                );
            })}

        </div>
    )
}

export default RoleInfos;