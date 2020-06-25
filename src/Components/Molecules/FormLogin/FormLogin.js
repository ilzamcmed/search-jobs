import React from 'react';
import 'antd/dist/antd.css'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './FormLogin.css';

const FormLogin = ({ onFinish }) => {
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
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Entrar
        </Button>
                Ou <a href="/">cadastre-se!</a>
            </Form.Item>
        </Form>
    )

};

export default FormLogin;