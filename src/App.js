import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import Settings from './containers/Settings/Settings'
import Game from './containers/game/Game'
import CustomButton from './components/button/Button'

class App extends Component {
  state = {
    gaming: true,
  }
  toggleScreen() {
    this.setState({ gaming: !this.state.gaming, });

  }
  render() {
    return (
      <div className='mainWrapper'>
        <CustomButton buttonText={this.state.gaming ? 'Settings' : 'Game'} click={() => this.toggleScreen()}></CustomButton>
        {this.state.gaming ?
          <Game></Game>
          :
          <Settings></Settings>}
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, '')(App);



