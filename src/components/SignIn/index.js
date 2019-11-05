import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {compose} from 'recompose';
import './signin.css'

import {SignUpLink} from '../SignUp';
import {PasswordForgetLink} from '../PasswordForget';
import {withFirebase} from '../Firebase';
import * as ROUTES from '../constants/routes';

const SignInPage = () => (
    <div className="body">
        <SignInForm/>
    </div>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const {email, password} = this.state;
        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(ref => {
                this.setState({...INITIAL_STATE});
                this.props.history.push(ROUTES.HOME);
            console.log('token user: ', ref.user.refreshToken);
            })
            .catch(error => {
                this.setState({error});
            });
        event.preventDefault();
    };

    onChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        const {email, password, error} = this.state;

        const isInvalid = password === '' || email === '';

        return (
            <form className="login-box" onSubmit={this.onSubmit}>
                <h1>Login</h1>
                <div className="signin-box">
                    <input type="text" placeholder="Enter Email" name="email" value={email} onChange={this.onChange}
                           style={{color: 'white'}}/>
                </div>

                <div className="signin-box">
                    <input type="password" placeholder="Enter Password" name="password" value={password}
                           onChange={this.onChange}/>
                </div>
                <div className="button-content">
                    <PasswordForgetLink/>
                </div>
                <button disabled={isInvalid} className="btn" type="submit">Sign In</button>
                <div className="btn"><SignUpLink/></div>
                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const SignInLink = () => (
    <Link to={ROUTES.SIGN_IN}>Sign In</Link>
);

const SignInForm = compose(withRouter, withFirebase,)(SignInFormBase);

export default SignInPage;
export {SignInForm, SignInLink};