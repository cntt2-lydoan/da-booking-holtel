import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Direction from './direction/Direction';
import {firebaseConnect} from './connectFirebase/firebaseConnect';
// import Login from './component/login/Login';
import 'antd/dist/antd.css';
import LoginAnt from './component/login/LoginAnt';
export default class App extends Component {
  render() {
    // console.log(firebaseConnect);
    return (
      <BrowserRouter>
        <Direction/>
      </BrowserRouter>
      // <div>
      //   <LoginAnt></LoginAnt>
      // </div>
    )
  }
}
