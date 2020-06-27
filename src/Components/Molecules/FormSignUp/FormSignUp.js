import React from 'react';
import 'antd/dist/antd.css'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

import './FormSignUp.css'

const FormSignUp = ({ onFinish, login }) => {
    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="name"
                rules={[
                    {
                        required: true,
                        message: "Por favor, insira seu nome!"
                    }
                ]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Nome completo"
                />
            </Form.Item>
            <Form.Item
                name="email"
                rules={[
                    {
                        required: true,
                        message: "Por favor, insira seu e-mail!"
                    }
                ]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="E-mail"
                />
            </Form.Item>
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: "Por favor, insira seu usuário!"
                    }
                ]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Usuário"
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: "Por favor, insira sua senha!"
                    }
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Senha"
                />
            </Form.Item>
            <Form.Item></Form.Item>

            <Form.Item>
                <Button onClick={login} type="primary" htmlType="submit" className="login-form-button" >
                    Cadastrar
</Button>
                Ou <Link to="/login">Login</Link>
            </Form.Item>
        </Form>

    );
}

export default FormSignUp;