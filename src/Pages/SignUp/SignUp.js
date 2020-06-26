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
        console.log('Cadastrei', value)
    }


    render() {
        return (

            <GeneralTemplate >
                <SignUpContent
                    mainTitle='Crie uma conta'
                    onFinish={this.onFinish} />
            </GeneralTemplate>

        )
    }
}

export default SignUp;