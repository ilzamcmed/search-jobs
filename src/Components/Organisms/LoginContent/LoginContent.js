import React from 'react';
import MainTitle from '../../Atoms/MainTitle/MainTitle';
import FormLogin from '../../Molecules/FormLogin/FormLogin';

import './LoginContent.css'

const LoginContent = ({ mainTitle, onFinish, login }) => {
    return (
        <main className="loginContent--container">
            <MainTitle
                mainTitle={mainTitle}
            />
            <FormLogin
                onFinish={onFinish}
                login={login}
            />
        </main>
    )
}

export default LoginContent;