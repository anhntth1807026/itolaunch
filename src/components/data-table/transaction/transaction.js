import React, { Component } from 'react';
import { compose } from 'recompose';
import { withAuthorization } from '../../auth/Session';

class TransactionDataTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            users: [],
        };
    }

    componentDidMount() {
        this.setState({ loading: true });

        this.unsubscribe = this.props.firebase
            .users()
            .onSnapshot(snapshot => {
                let users = [];

                snapshot.forEach(doc =>
                    users.push({ ...doc.data(), uid: doc.id }),
                );

                this.setState({
                    users,
                    loading: false,
                });
            });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        // const { users } = this.state;

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
                                                    <table className="table table-bordered" id="dataTable" width="100%"
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
                                                        <tr>
                                                            <td>1</td>
                                                            <td>1572838264</td>
                                                            <td>0x5a7ade1863e2497fca323b96b</td>
                                                            <td>0xd23ca7d826b909de5f2fd52f467a3d6a3a25cfd7daec955cbbd985a81a1471d1</td>
                                                            <td>0x510e5c60006b98dbcf783e8d0124f45301598f09</td>
                                                            <td>1572840991</td>
                                                        </tr>
                                                        <tr>
                                                            <td>0</td>
                                                            <td>1572838263</td>
                                                            <td>0x5a7ade1863e2497fca323b96b</td>
                                                            <td>0xd23ca7d826b909de5f2fd52f467a3d6a3a25cfd7daec955cbbd985a81a1471d1</td>
                                                            <td>0x510e5c60006b98dbcf783e8d0124f45301598f09</td>
                                                            <td>1572840990</td>
                                                        </tr>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>1572838264</td>
                                                            <td>0x5a7ade1863e2497fca323b96b</td>
                                                            <td>0xd23ca7d826b909de5f2fd52f467a3d6a3a25cfd7daec955cbbd985a81a1471d1</td>
                                                            <td>0x510e5c60006b98dbcf783e8d0124f45301598f09</td>
                                                            <td>1572840991</td>
                                                        </tr>
                                                        <tr>
                                                            <td>0</td>
                                                            <td>1572838263</td>
                                                            <td>0x5a7ade1863e2497fca323b96b</td>
                                                            <td>0xd23ca7d826b909de5f2fd52f467a3d6a3a25cfd7daec955cbbd985a81a1471d1</td>
                                                            <td>0x510e5c60006b98dbcf783e8d0124f45301598f09</td>
                                                            <td>1572840990</td>
                                                        </tr>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>1572838264</td>
                                                            <td>0x5a7ade1863e2497fca323b96b</td>
                                                            <td>0xd23ca7d826b909de5f2fd52f467a3d6a3a25cfd7daec955cbbd985a81a1471d1</td>
                                                            <td>0x510e5c60006b98dbcf783e8d0124f45301598f09</td>
                                                            <td>1572840991</td>
                                                        </tr>
                                                        <tr>
                                                            <td>0</td>
                                                            <td>1572838263</td>
                                                            <td>0x5a7ade1863e2497fca323b96b</td>
                                                            <td>0xd23ca7d826b909de5f2fd52f467a3d6a3a25cfd7daec955cbbd985a81a1471d1</td>
                                                            <td>0x510e5c60006b98dbcf783e8d0124f45301598f09</td>
                                                            <td>1572840990</td>
                                                        </tr>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>1572838264</td>
                                                            <td>0x5a7ade1863e2497fca323b96b</td>
                                                            <td>0xd23ca7d826b909de5f2fd52f467a3d6a3a25cfd7daec955cbbd985a81a1471d1</td>
                                                            <td>0x510e5c60006b98dbcf783e8d0124f45301598f09</td>
                                                            <td>1572840991</td>
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
                </div>
            </div>
        );
    }
}

const condition = authUser => !!authUser;

export default compose(
    withAuthorization(condition),
)(TransactionDataTable);

