import React, { Component } from 'react';
import GeneralTemplate from '../../Templates/GeneralTemplate/GeneralTemplate'
import SignUpContent from '../../Components/Organisms/SignUpContent/SignUpContent';

import './SignUp.css';

class SignUp extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    onFinish = (value) => {
       
        this.props.history.push("/");
    }


    render() {
        const { login, loggedUser } = this.props
        return (

            <GeneralTemplate loggedUser={loggedUser} >
                <SignUpContent
                    mainTitle='Crie uma conta'
                    onFinish={this.onFinish}
                    login={login} />
            </GeneralTemplate>

        )
    }
}

export default SignUp;