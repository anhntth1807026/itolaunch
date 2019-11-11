// import React, { Component } from 'react';
// import { compose } from 'recompose';
// import { withAuthorization } from '../../auth/Session';
//
// class UserDataTable extends Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             loading: false,
//             users: [],
//         };
//     }
//
//     componentDidMount() {
//         this.setState({ loading: true });
//
//         this.unsubscribe = this.props.firebase
//             .users()
//             .onSnapshot(snapshot => {
//                 let users = [];
//
//                 snapshot.forEach(doc =>
//                     users.push({ ...doc.data(), uid: doc.id }),
//                 );
//
//                 this.setState({
//                     users,
//                     loading: false,
//                 });
//             });
//     }
//
//     componentWillUnmount() {
//         this.unsubscribe();
//     }
//
//     render() {
//         const { users } = this.state;
//
//         return (
//
//             <div>
//                 <div id="wrapper">
//                     {/* Sidebar */}
//                     <ul className="sidebar navbar-nav">
//                         <li className="nav-item active">
//                             <a className="nav-link" href="index.js">
//                                 <i className="fas fa-fw fa-tachometer-alt"/>
//                                 <span>Dashboard</span>
//                             </a>
//                         </li>
//                         <li className="nav-item dropdown">
//                             <a className="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button"
//                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                 <i className="fas fa-fw fa-folder"/>
//                                 <span>Smart Contract</span>
//                             </a>
//                             <div className="dropdown-menu" aria-labelledby="pagesDropdown">
//                                 <h4 className="dropdown-header">Smart Contract</h4>
//                                 <a className="dropdown-item" href="#smartcontracttable">Document</a>
//                             </div>
//                         </li>
//                         <li className="nav-item dropdown">
//                             <a className="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button"
//                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                 <i className="fas fa-fw fa-folder"/>
//                                 <span>Transactions</span>
//                             </a>
//                             <div className="dropdown-menu" aria-labelledby="pagesDropdown">
//                                 <h4 className="dropdown-header">Transactions</h4>
//                                 <a className="dropdown-item" href="#transactiontable">Document</a>
//                             </div>
//                         </li>
//                         <li className="nav-item dropdown">
//                             <a className="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button"
//                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                 <i className="fas fa-fw fa-folder"/>
//                                 <span>Users</span>
//                             </a>
//                             <div className="dropdown-menu" aria-labelledby="pagesDropdown">
//                                 <h4 className="dropdown-header">Users</h4>
//                                 <a className="dropdown-item" href="#usertable">User Table</a>
//                             </div>
//                         </li>
//                     </ul>
//                     <div id="content-wrapper">
//                         <div className="container-fluid">
//
//                             {/*Users Data Table*/}
//                             <div id="usertable">
//                                 <div className="container-fluid">
//
//                                     {/* Breadcrumbs*/}
//                                     <ol className="breadcrumb">
//                                         <li className="breadcrumb-item">
//                                             <a href="#">Dashboard</a>
//                                         </li>
//                                         <li className="breadcrumb-item active">Users Data</li>
//                                         <li className="breadcrumb-item active">Document</li>
//                                     </ol>
//
//                                     <div className="card mb-3">
//                                         <div className="card-header">
//                                             <i className="fas fa-table"/>
//                                             Users Data Table
//                                         </div>
//                                         <div className="card-body">
//                                             <div className="table-responsive">
//                                                 <table className="table table-bordered" id="dataTable" width="100%"
//                                                        cellSpacing={0}>
//                                                     <thead>
//                                                     <tr>
//                                                         <th>Code</th>
//                                                         <th>CreateAt</th>
//                                                         <th>Email</th>
//                                                         <th>Email Verified</th>
//                                                         <th>First Name</th>
//                                                         <th>Last Name</th>
//                                                         <th>Phone</th>
//                                                         <th>Sponsor</th>
//                                                         <th>STT</th>
//                                                         <th>Uid</th>
//                                                         <th>UpdateAt</th>
//                                                     </tr>
//                                                     </thead>
//                                                     <tfoot>
//                                                     <tr>
//                                                         <th>Code</th>
//                                                         <th>CreateAt</th>
//                                                         <th>Email</th>
//                                                         <th>Email Verified</th>
//                                                         <th>First Name</th>
//                                                         <th>Last Name</th>
//                                                         <th>Phone</th>
//                                                         <th>Sponsor</th>
//                                                         <th>STT</th>
//                                                         <th>Uid</th>
//                                                         <th>UpdateAt</th>
//                                                     </tr>
//                                                     </tfoot>
//                                                     <tbody>
//                                                     <tr>
//                                                         <td>1000</td>
//                                                         <td>1572838887802</td>
//                                                         <td>lexuanduy07@gmail.com</td>
//                                                         <td>false</td>
//                                                         <td>le</td>
//                                                         <td>xuan</td>
//                                                         <td>0989773866</td>
//                                                         <td>...</td>
//                                                         <td>false</td>
//                                                         <td>m9eVzRmgE9ezRAh4ab8sWpNubP12</td>
//                                                         <td>1572838887802</td>
//                                                     </tr>
//                                                     <tr>
//                                                         <td>1000</td>
//                                                         <td>1572838887802</td>
//                                                         <td>lexuanduy07@gmail.com</td>
//                                                         <td>false</td>
//                                                         <td>le</td>
//                                                         <td>xuan</td>
//                                                         <td>0989773866</td>
//                                                         <td>...</td>
//                                                         <td>false</td>
//                                                         <td>m9eVzRmgE9ezRAh4ab8sWpNubP12</td>
//                                                         <td>1572838887802</td>
//                                                     </tr>
//                                                     <tr>
//                                                         <td>1000</td>
//                                                         <td>1572838887802</td>
//                                                         <td>lexuanduy07@gmail.com</td>
//                                                         <td>false</td>
//                                                         <td>le</td>
//                                                         <td>xuan</td>
//                                                         <td>0989773866</td>
//                                                         <td>...</td>
//                                                         <td>false</td>
//                                                         <td>m9eVzRmgE9ezRAh4ab8sWpNubP12</td>
//                                                         <td>1572838887802</td>
//                                                     </tr>
//                                                     <tr>
//                                                         <td>1000</td>
//                                                         <td>1572838887802</td>
//                                                         <td>lexuanduy07@gmail.com</td>
//                                                         <td>false</td>
//                                                         <td>le</td>
//                                                         <td>xuan</td>
//                                                         <td>0989773866</td>
//                                                         <td>...</td>
//                                                         <td>false</td>
//                                                         <td>m9eVzRmgE9ezRAh4ab8sWpNubP12</td>
//                                                         <td>1572838887802</td>
//                                                     </tr>
//                                                     <tr>
//                                                         <td>1000</td>
//                                                         <td>1572838887802</td>
//                                                         <td>lexuanduy07@gmail.com</td>
//                                                         <td>false</td>
//                                                         <td>le</td>
//                                                         <td>xuan</td>
//                                                         <td>0989773866</td>
//                                                         <td>...</td>
//                                                         <td>false</td>
//                                                         <td>m9eVzRmgE9ezRAh4ab8sWpNubP12</td>
//                                                         <td>1572838887802</td>
//                                                     </tr>
//                                                     </tbody>
//                                                 </table>
//                                             </div>
//                                         </div>
//                                         <div className="card-footer small text-muted">Updated yesterday at 11:59 PM
//                                         </div>
//                                     </div>
//                                     {/* /.container-fluid */}
//                                     {/* Sticky Footer */}
//                                     <footer className="sticky-footer">
//                                         <div className="container my-auto">
//                                             <div className="copyright text-center my-auto">
//                                                 <span>Copyright © My Website 2019</span>
//                                             </div>
//                                         </div>
//                                     </footer>
//                                 </div>
//                             </div>
//
//                             {/* Sticky Footer */}
//                             <footer className="sticky-footer">
//                                 <div className="container my-auto">
//                                     <div className="copyright text-center my-auto">
//                                         <span>Copyright © My Website 2019</span>
//                                     </div>
//                                 </div>
//                             </footer>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
//
// const condition = authUser => !!authUser;
//
// export default compose(
//     withAuthorization(condition),
// )(UserDataTable);
//
