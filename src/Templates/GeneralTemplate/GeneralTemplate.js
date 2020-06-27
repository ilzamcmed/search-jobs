import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../Images/logo.svg'

import './GeneralTemplate.css';



const GeneralTemplate = ({ children, loggedUser, logout }) => {
    return (
        <div className="generalTemplate--container">
            <nav>
                <div>
                    <Link to="/">
                        <Logo />
                    </Link>

                    <ul className="generalTemplate--list">
                        {loggedUser ?
                            <Fragment>
                                <Link to="/"><li>Home</li></Link>
                                <Link to="/" onClick={logout}><li>Sair</li></Link>
                            </Fragment>
                            :
                            <Fragment>
                                <Link to="/"><li>Home</li></Link>
                                <Link to="/login"><li>Entrar</li></Link>
                                <Link to="/signup"><li>Cadastro</li></Link>
                            </Fragment>
                        }

                    </ul>
                </div>
            </nav>
            {children}
        </div>
    )
}


export default GeneralTemplate;
