import {Layout, Menu, Row} from 'antd';
import React from 'react';
import {Routes, useNavigate} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {AuthActionCreators} from "../store/reducer/auth/action-creators";
import {useDispatch} from "react-redux";
import { useActions } from '../hooks/useActions';

const Navbar = () => {
    const navigate = useNavigate()
    const {isAuth, user} = useTypedSelector(state => state.auth)
    const {logout} = useActions();
    return (
        <Layout.Header>
            <Row justify="end">
                {isAuth
                    ?
                    <>
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <div> {user.username}</div>
                        <Menu.Item onClick={logout} key={1}>Exit</Menu.Item>

                    </Menu>
                    </>
                    :
                    <>
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item onClick={() =>navigate('/login')} key={0}>Login</Menu.Item>

                    </Menu>
                    </>
                }


            </Row>

        </Layout.Header>
    );
};

export default Navbar;