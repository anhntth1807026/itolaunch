import React, {Component} from 'react';
import {compose} from 'recompose';
import {withAuthorization} from '../../auth/Session'
import * as firebase from "firebase";
class HomePage extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     // setTimeout(function(){ console.log(firebase.auth().currentUser); }, 3000);
    //
    //     // firebase.auth().onAuthStateChanged(function(user) {
    //     //     if (user) {
    //     //         console.log('user logined: ', user.email);
    //     //
    //     //     } else {
    //     //         console.log('user not login');
    //     //     }
    //     // });
    //     var clearABC = setInterval(function () {
    //         if (firebase.auth().currentUser != null) {
    //             clearInterval(clearABC);
    //             firebase.auth().currentUser.getIdToken(true)
    //                 .then(a => {
    //                     console.log(a);
    //                     this.tokenKey = a;
    //                 }).catch(function (error) {
    //                 // Handle error
    //                 console.log('get token error: ', error);
    //             });
    //         }
    //     }, 50);
    //     console.log(firebase.auth().currentUser)
    //
    // }

    render() {
        return (
            <div>
                <div id="wrapper">
                    {/* Sidebar */}
                    <ul className="sidebar navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="index.js">
                                <i className="fas fa-fw fa-tachometer-alt"/>
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-fw fa-folder"/>
                                <span>Smart Contract</span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                                <h4 className="dropdown-header">Smart Contract</h4>
                                <a className="dropdown-item" href="#smartcontracttable">Document</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-fw fa-folder"/>
                                <span>Transactions</span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                                <h4 className="dropdown-header">Transactions</h4>
                                <a className="dropdown-item" href="#transactiontable">Document</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-fw fa-folder"/>
                                <span>Users</span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                                <h4 className="dropdown-header">Users</h4>
                                <a className="dropdown-item" href="#usertable">User Table</a>
                            </div>
                        </li>
                    </ul>
                    <div id="content-wrapper">
                        <div className="container-fluid">
                            {/* Breadcrumbs*/}
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#">Dashboard</a>
                                </li>
                                <li className="breadcrumb-item active">Overview</li>
                            </ol>
                            {/* DataTables Example */}
                            {/*Smart Contract Data Table*/}
                            <div id="smartcontracttable">
                                <div className="card mb-3">
                                    <div className="card-header">
                                        <i className="fas fa-table"/>
                                        Smart Contract Data Table Example
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-bordered" id="dataTable" width="100%"
                                                   cellSpacing={0}>
                                                <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Token</th>
                                                </tr>
                                                </thead>
                                                <tfoot>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Token</th>
                                                </tr>
                                                </tfoot>
                                                <tbody>
                                                <tr>
                                                    <td>Tether USD</td>
                                                    <td>USDT</td>
                                                </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                                </div>
                            </div>

                            {/*Transactions Data Table*/}
                            <div id="transactiontable">
                                <div id="transactions">
                                    <div className="container-fluid">

                                        {/* Breadcrumbs*/}
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <a href="#">Dashboard</a>
                                            </li>
                                            <li className="breadcrumb-item active">Transaction</li>
                                            <li className="breadcrumb-item active">Document</li>
                                        </ol>

                                        <div className="card mb-3">
                                            <div className="card-header">
                                                <i className="fas fa-table"/>
                                                Transaction Data Table
                                            </div>
                                            <div className="card-body">
                                                <div className="table-responsive">
                                                    <table className="table table-bordered" id="" width="100%"
                                                           cellSpacing={0}>
                                                        <thead>
                                                        <tr>
                                                            <th>Amount</th>
                                                            <th>Create</th>
                                                            <th>From</th>
                                                            <th>Id</th>
                                                            <th>To</th>
                                                            <th>UpdatedAt</th>
                                                        </tr>
                                                        </thead>
                                                        <tfoot>
                                                        <tr>
                                                            <th>Amount</th>
                                                            <th>Create</th>
                                                            <th>From</th>
                                                            <th>Id</th>
                                                            <th>To</th>
                                                            <th>UpdatedAt</th>
                                                        </tr>
                                                        </tfoot>
                                                        <tbody>
                                                        <tr>
                                                            <td>0</td>
                                                            <td>1572838263</td>
                                                            <td>0x5a7ade1863e2497fca323b96b</td>
                                                            <td>0xd23ca7d826b909de5f2fd52f467a3d6a3a25cfd7daec955cbbd985a81a1471d1</td>
                                                            <td>0x510e5c60006b98dbcf783e8d0124f45301598f09</td>
                                                            <td>1572840990</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="card-footer small text-muted">Updated yesterday at 11:59
                                                PM
                                            </div>
                                        </div>
                                    </div>
                                    {/* /.container-fluid */}
                                    {/* Sticky Footer */}
                                    <footer className="sticky-footer">
                                        <div className="container my-auto">
                                            <div className="copyright text-center my-auto">
                                                <span>Copyright © My Website 2019</span>
                                            </div>
                                        </div>
                                    </footer>
                                </div>
                            </div>

                            {/*Users Data Table*/}
                            <div id="usertable">
                                <div className="container-fluid">

                                    {/* Breadcrumbs*/}
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="#">Dashboard</a>
                                        </li>
                                        <li className="breadcrumb-item active">Users Data</li>
                                        <li className="breadcrumb-item active">Document</li>
                                    </ol>

                                    <div className="card mb-3">
                                        <div className="card-header">
                                            <i className="fas fa-table"/>
                                            Users Data Table
                                        </div>
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table table-bordered" id="dataTable" width="100%"
                                                       cellSpacing={0}>
                                                    <thead>
                                                    <tr>
                                                        <th>Code</th>
                                                        <th>CreateAt</th>
                                                        <th>Email</th>
                                                        <th>Email Verified</th>
                                                        <th>First Name</th>
                                                        <th>Last Name</th>
                                                        <th>Phone</th>
                                                        <th>Sponsor</th>
                                                        <th>STT</th>
                                                        <th>Uid</th>
                                                        <th>UpdateAt</th>
                                                    </tr>
                                                    </thead>
                                                    <tfoot>
                                                    <tr>
                                                        <th>Code</th>
                                                        <th>CreateAt</th>
                                                        <th>Email</th>
                                                        <th>Email Verified</th>
                                                        <th>First Name</th>
                                                        <th>Last Name</th>
                                                        <th>Phone</th>
                                                        <th>Sponsor</th>
                                                        <th>STT</th>
                                                        <th>Uid</th>
                                                        <th>UpdateAt</th>
                                                    </tr>
                                                    </tfoot>
                                                    <tbody>
                                                    <tr>
                                                        <td>1000</td>
                                                        <td>1572838887802</td>
                                                        <td>lexuanduy07@gmail.com</td>
                                                        <td>false</td>
                                                        <td>le</td>
                                                        <td>xuan</td>
                                                        <td>0989773866</td>
                                                        <td>...</td>
                                                        <td>false</td>
                                                        <td>m9eVzRmgE9ezRAh4ab8sWpNubP12</td>
                                                        <td>1572838887802</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="card-footer small text-muted">Updated yesterday at 11:59 PM
                                        </div>
                                    </div>
                                    {/* /.container-fluid */}
                                    {/* Sticky Footer */}
                                    <footer className="sticky-footer">
                                        <div className="container my-auto">
                                            <div className="copyright text-center my-auto">
                                                <span>Copyright © My Website 2019</span>
                                            </div>
                                        </div>
                                    </footer>
                                </div>
                            </div>

                            {/* Sticky Footer */}
                            <footer className="sticky-footer">
                                <div className="container my-auto">
                                    <div className="copyright text-center my-auto">
                                        <span>Copyright © My Website 2019</span>
                                    </div>
                                </div>
                            </footer>
                        </div>
                        {/* /.content-wrapper */}
                    </div>
                    {/* /#wrapper */}

                    {/* Scroll to Top Button*/}
                    {/*<a className="scroll-to-top rounded" href="#page-top">*/}
                    {/*    <i className="fas fa-angle-up"/>*/}
                    {/*</a>*/}

                    {/* Logout Modal*/}
                    <div className="modal fade" id="logoutModal" tabIndex={-1} role="dialog"
                         aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">Select "Logout" below if you are ready to end your current
                                    session.
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel
                                    </button>
                                    <a className="btn btn-primary" href="login.html">Logout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const condition = authUser => !!authUser;

export default compose(
    withAuthorization(condition),
)(HomePage);
