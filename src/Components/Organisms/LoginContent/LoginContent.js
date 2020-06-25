import React from 'react';
import MainTitle from '../../Atoms/MainTitle/MainTitle';
import FormLogin from '../../Molecules/FormLogin/FormLogin';

import './LoginContent.css'

const LoginContent = ({mainTitle, onFinish}) => {
    return (
        <main className="loginContent--container">
             <MainTitle 
                mainTitle={mainTitle}
            />
            <FormLogin onFinish={onFinish} />
        </main>
    )
}

export default LoginContent;