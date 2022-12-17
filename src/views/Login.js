import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AuthService from '../services/authService';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
    const navigate = useNavigate();
    const { state } = useLocation();

    const [userName, setUserName] = useState('DonVladster');
    const [password, setPassword] = useState('admin');

    const login = async () => {
        const { from } = state || {};
        const response = await AuthService.Login(userName, password);

        if (response !== false) {
            navigate("/");
        }
        else {
            console.log("WRONG DETAILS")
        }

        navigate(from.pathname, { replace: true });
    };

    return (
        <>
            <div className="row">
                <div className="col-5" />
                <div className="col-2" >
                    <h1 className="mb-5"> Login</h1>

                    <Form >
                        <Form.Group className="mb-3">
                            <Form.Control
                                required
                                type="string"
                                name="userName"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                placeholder="Username" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control
                                required
                                type="string"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password" />
                        </Form.Group>
                        <Button onClick={login}>
                            Sign In
                        </Button>
                    </Form>

                </div>

                <div className="col-5" />
            </div>
        </>
    )
};

export default Login;