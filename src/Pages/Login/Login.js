import React, { Component } from 'react';
import GeneralTemplate from '../../Templates/GeneralTemplate/GeneralTemplate';
import LoginContent from '../../Components/Organisms/LoginContent/LoginContent';

import './Login.css';

class Login extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    onFinish = (value) => {
        console.log('Dados enviados', value)
    }


    render() {
        return (
            <GeneralTemplate>
                <LoginContent
                    mainTitle="Acesse sua conta"
                    onFinish={this.onFinish} />
            </GeneralTemplate>
        )
    }
}

export default Login;