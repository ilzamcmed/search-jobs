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
        this.props.history.push("/");
    }


    render() {
        const { login, loggedUser } = this.props;

        return (
            <GeneralTemplate loggedUser={loggedUser}>
                <LoginContent
                    mainTitle="Acesse sua conta"
                    onFinish={this.onFinish} 
                    login={login}/>
            </GeneralTemplate>
        )
    }
}

export default Login;