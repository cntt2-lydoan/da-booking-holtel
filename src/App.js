import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Direction from './direction/Direction';
import {firebaseConnect} from './connectFirebase/firebaseConnect';
export default class App extends Component {
  render() {
    console.log(firebaseConnect);
    return (
      <BrowserRouter>
        <Direction/>
      </BrowserRouter>
    )
  }
}
