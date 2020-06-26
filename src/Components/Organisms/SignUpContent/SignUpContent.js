import React from 'react';
import MainTitle from '../../Atoms/MainTitle/MainTitle'
import FormSignUp from '../../Molecules/FormSignUp/FormSignUp';


import './SignUpContent.css'

const SingUpContent = ({ mainTitle, onFinish }) => {
  return (
    <div className="singUpContent--container">
      <MainTitle mainTitle={mainTitle} />
      <FormSignUp onFinish={onFinish} />

    </div>

  );
}

export default SingUpContent;