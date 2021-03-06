import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';

class App extends Component {
  goToUrl = url => {
    // Change the page to the URL associated with the button
    this.props.history.push(`/${url}`);
  }

  render() {
    return (
      <React.Fragment>
        <Header goToUrl={this.goToUrl} />
        <Home />
      </React.Fragment>
    );
  }
}

export default App;
