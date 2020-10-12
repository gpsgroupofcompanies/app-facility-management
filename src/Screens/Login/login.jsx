import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import './login.scss';
import Button from '@material-ui/core/Button';

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            loginIdError: false,
            passwordError: false,
            loginId: '',
            password: '',
            showLoginError: false
        }
    }

    onInputChange = (event, field) => {
        event.persist();
        let propertyName = {
            LOGIN_ID: 'loginId',
            PASSWORD: 'password'
        }
        this.setState({ [propertyName[field]]: event.target.value }, () => {
            this.setState({ loginIdError: (this.state.loginId ? false : true), passwordError: (this.state.password ? false : true) });
        })
    }

    showLoginError = () => {
        return (
            <>
                {
                    this.state.showLoginError ?
                        <div className="gps_login_error" >
                            Login Id / Password not Matched
                        </div> : null
                }
            </>
        )
    }

    login = () => {
        this.props.history.push(`/profile`);
    }

    render() {
        return (
            <div className="gps_login">
                <div className="gps_login_top">
                    <div>
                        Lets Make the<br></br> " Leave " <br></br>Process Easy
                    </div>
                </div>
                <div className="gps_sep gps_title ">
                    Laisser
                </div>
                <div className="gps_sep">
                    <TextField
                        id="login"
                        label="Login Id"
                        variant="outlined"
                        value={this.state.loginId}
                        error={this.state.loginIdError}
                        onChange={(e) => this.onInputChange(e, 'LOGIN_ID')}
                        helperText={this.state.loginIdError ? "Login Id Required" : null}
                    />
                </div>
                <div className="gps_sep">
                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        error={this.state.passwordError}
                        value={this.state.password}
                        onChange={(e) => this.onInputChange(e, 'PASSWORD')}
                        helperText={this.state.passwordError ? "Password Required" : null}
                    />
                </div>
                <div className="gps_sep">
                    <Button variant="contained" disabled={this.state.loginIdError || this.state.passwordError} color="primary" onClick={() => this.login()}>Login</Button>
                </div>
                {this.showLoginError()}
            </div>
        )
    }
}
