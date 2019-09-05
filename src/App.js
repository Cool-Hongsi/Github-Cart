import React, { Component } from 'react';
import './App.scss';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import GithubContainer from './containers/GithubContainer';
import CartContainer from './containers/CartContainer';

export default class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div className="App">

          <MainContainer />

          <Switch>
            <Route exact path="/" component={GithubContainer} />
            <Route path="/cart" component={CartContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}