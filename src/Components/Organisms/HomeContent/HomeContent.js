import React from 'react';
import SearchBar from '../../Molecules/SearchBar/SearchBar';
import Card from '../../Molecules/Card/Card'

import './HomeContent.css';

const HomeContent = ({ texto, onClick, type, placeholder, value, onChange, data }) => {
    return (

        <main>
            <h1>Tech Jobs</h1>

            <section>
                <SearchBar
                    onChange={onChange}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    texto={texto}
                    onClick={onClick}
                />
                <div>
                    <h2>Filtros</h2>
                </div>
            </section>

            <section>
                {/* If ternário para saber se o dado pesquisado tem no arquivo json */}
                {data ?
                    (data.map(item => {

                        const {logo, company, position, postedAd, contract, location, languages, tools} = item
                        return (
                            <Card
                                logo={logo}
                                company={company}
                                position={position}
                                postedAd={postedAd}
                                contract={contract}
                                location={location}
                                languages={languages}
                                tools={tools}
                            />
                        )
                    }))
                    :  // aqui vem a negação
                    (<h2>Nenhuma vaga encontrada</h2>)
                }

            </section>
        </main>

    )
}

export default HomeContent;