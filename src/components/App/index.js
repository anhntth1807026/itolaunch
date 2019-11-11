import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navigation from '../Navigation';
import SignUpPage from '../auth/SignUp';
import SignInPage from '../auth/SignIn';
import SmartContractPage from '../data-table/smart-contract/smart-contract';
import TransactionPage from '../data-table/transaction/transaction';
import UserPage from '../data-table/user/user';
import PasswordForgetPage from '../auth/PasswordForget';
import HomePage from '../view/Home';

import * as ROUTES from '../../constants/routes';
import {withAuthentication} from '../auth/Session';

const App = () => (
    <Router>
        <div>
            <Navigation/>
            <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>
            <Route path={ROUTES.SIGN_IN} component={SignInPage}/>
            <Route path={ROUTES.SMARTCONTRACT} component={SmartContractPage}/>
            <Route path={ROUTES.TRANSACTION} component={TransactionPage}/>
            <Route path={ROUTES.USER} component={UserPage}/>
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>
            <Route exact path={ROUTES.HOME} component={HomePage}/>
        </div>
    </Router>
);

export default withAuthentication(App);
