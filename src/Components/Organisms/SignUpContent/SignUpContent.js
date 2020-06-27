import React from 'react';
import MainTitle from '../../Atoms/MainTitle/MainTitle'
import FormSignUp from '../../Molecules/FormSignUp/FormSignUp';


import './SignUpContent.css'

const SignUpContent = ({ mainTitle, onFinish, login }) => {
  return (
    <div className="signUpContent--container">
      <MainTitle
        mainTitle={mainTitle}
      />
      <FormSignUp
        onFinish={onFinish}
        login={login}
      />

    </div>

  );
}

export default SignUpContent;