import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import '../../../component-css/signup.css';


import {withFirebase} from '../../Firebase';
import * as ROUTES from '../../../constants/routes';

const SignUpPage = () => (
    <div>
        <SignUpForm/>
    </div>
);

const INITIAL_STATE = {
    firstname: '',
    lastname: '',
    phone: '',
    sponsor: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';
const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with this E-Mail address already exists.
  Try to login with this account instead. If you think the
  account is already used from one of the social logins, try
  to sign in with one of them. Afterward, associate your accounts
  on your personal account page.
`;

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const {firstname, lastname, phone, sponsor, email, passwordOne} = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                // Create a user in your Firebase realtime database
                return this.props.firebase.user(authUser.user.uid).set(
                    {
                        firstname, lastname,
                        phone, sponsor,
                        email, passwordOne,
                    },
                    {merge: true},
                );
            })
            .then(() => {
                return this.props.firebase.doSendEmailVerification();
            })
            .then(() => {
                this.setState({...INITIAL_STATE});
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
                    error.message = ERROR_MSG_ACCOUNT_EXISTS;
                }

                this.setState({error});
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    onChangeCheckbox = event => {
        this.setState({[event.target.name]: event.target.checked});
    };

    render() {
        const {
            firstname,
            lastname,
            phone,
            sponsor,
            email,
            isAdmin,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            firstname === ''||
            lastname === ''||
            phone === ''||
            sponsor === '';


        return (
            <form className="signup-box" onSubmit={this.onSubmit}>
                <h1>Sign Up</h1>
                <div className="signup-textbox">
                    <input name="firstname" value={firstname} onChange={this.onChange} type="text"
                           placeholder="Enter First Name" style={{color: 'white'}}/>
                </div>

                <div className="signup-textbox">
                    <input name="lastname" value={lastname} onChange={this.onChange} type="text"
                           placeholder="Enter Last Name" style={{color: 'white'}}/>
                </div>

                <div className="signup-textbox">
                    <input name="phone" value={phone} onChange={this.onChange} type="text"
                           placeholder="Enter Phone" style={{color: 'white'}}/>
                </div>

                <div className="signup-textbox">
                    <input name="sponsor" value={sponsor} onChange={this.onChange} type="text"
                           placeholder="Enter Sponsor" style={{color: 'white'}}/>
                </div>

                <div className="signup-textbox">
                    <input name="email" value={email} onChange={this.onChange} type="text" placeholder="Email Address"
                           style={{color: 'white'}}/>
                </div>

                <div className="signup-textbox">
                    <input name="passwordOne" value={passwordOne} onChange={this.onChange} type="password"
                           placeholder="Password"/>
                </div>

                <div className="signup-textbox">
                    <input name="passwordTwo" value={passwordTwo} onChange={this.onChange} type="password"
                           placeholder="Confirm Password"/>
                </div>

                <label>
                    Admin:
                    <input
                        name="isAdmin"
                        type="checkbox"
                        checked={isAdmin}
                        onChange={this.onChangeCheckbox}
                    />
                </label>

                <button disabled={isInvalid} className="btn" type="submit">Sign Up</button>
                {/*<div className="btn"><SignInLink/></div>*/}
                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const SignUpLink = () => (
    <p>
        <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export {SignUpForm, SignUpLink};
