import React, {Component} from 'react';
import './Login.css';
import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Header from '../../common/header/Header';
import {FormHelperText} from '@material-ui/core';

class Login extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="PageBody">
                    <Card   className="LoginCard">
                        <p className="LoginTitle">LOGIN</p>
                        <FormControl required>
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <Input id="username" type="text" className="InputField" style = {{width: 400}}/>
                            <FormHelperText className="HelperText">required</FormHelperText>
                        </FormControl>
                        <br/>
                        <br/>
                        <FormControl required>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" type="password" className="InputField" style = {{width: 400}}/>
                            <FormHelperText className="HelperText">required</FormHelperText>
                        </FormControl>
                        <br/>
                        <br/>
                        <br/>
                        <Button variant="contained" color="primary" className="LoginBtn">LOGIN</Button>
                        <br/>
                        <br/>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Login;