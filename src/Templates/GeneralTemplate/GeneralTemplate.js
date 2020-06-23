import React from 'react';
import {ReactComponent as Logo} from '../../Images/logo.svg'
import './GeneralTemplate.css';



const GeneralTemplate = ({children}) => {
    return (
        <div className="generalTemplate--container">
           <nav>
               <div>
                   <a href="/"> 
                   <Logo/>
                   </a>
                   <ul>
                        <a href="/"><li>Home</li></a>
                        <a href="/login"><li>Entrar</li></a>
                        <a href="/cadastro"><li>Cadastro</li></a>
                   </ul>
               </div>
           </nav>
           {children}
        </div>
    )
}


export default GeneralTemplate;
