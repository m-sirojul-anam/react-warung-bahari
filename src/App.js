import React, { Component } from 'react';
import './css/styles.css';
import Login from './auth/Login';
import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom';

import RequireAuth from './auth/RequireAuth';
import Home from './pages/home/Home';
import ColumnLayout from './layout/ColumnLayout';

const App = () => {
    
    // if(props.showDashboard || props.logout){
    //   return(
    //     <>
    //        <Dashboard />
    //     </>
    //   )
    // } else if(props.showLogin){
    //   return(
    //     <>
    //       <Login />
    //     </>
    //   )
    // } else if(props.showMenuForm){
    //   return(
    //   <>
    //     <AddDataFoodForm />
    //   </>
    //   )
    // } else if(props.showTableForm){
    //   return(
    //   <>
    //     <AddDataTableForm />
    //   </>
    //   )
    // }
    return(
      <>
      <Router>
        <Routes>
            <Route index element={<Login/>}></Route>
            <Route path='/*' element={<RequireAuth redirectTo={"/"}><ColumnLayout/></RequireAuth>}/>
        </Routes> 
      </Router>
      </>
    )
  }

//   const mapStateToProps = (state) => {
//     return{
//       showDashboard: state.home.showDashboard,
//       showMenuForm: state.menu.showMenuForm,
//       showTableForm: state.table.showTableForm,
//       showLogin: state.login.showLogin,
//       logout: state.logout.logout
//     }
//   }

// export default connect(mapStateToProps, null)(App)
export default App;