import React from 'react';

import './LoginContent.css'
import MainTitle from '../../Atoms/MainTitle/MainTitle';

const LoginContent = ({mainTitle}) => {
    return (
        <main className="loginContent--container">
             <MainTitle 
                mainTitle={mainTitle}
            />
        </main>
    )
}

export default LoginContent;