import React, {FC, useState} from 'react';
import {Button, Form, Input} from "antd";
import {rules} from '../utils/rules';
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "../store/reducer/auth/action-creators";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const LoginForm: FC = () => {

    const dispatch = useDispatch()
    const { error, isLoading }  = useTypedSelector(state => state.auth)
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useActions()
    const submit = () => {
        login(username, password)
    }
    return (
        <Form onFinish={submit}
        >
            {error && <div style={{color: 'red'}}>{error}</div>}
            <Form.Item
                label="Username"
                name="username"
                rules={[rules.required('Please input your username!')]}
            >
                <Input value={username} onChange={e => setUserName(e.target.value)}/>
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[rules.required('Please input your username!')]}
            >
                <Input.Password value={password} onChange={e => setPassword(e.target.value)}/>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Log In
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;