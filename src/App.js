import React, { Component} from 'react';

import styled from 'styled-components';
import './App.css';
import Background from './assets/tile.jpg';
import BackgroundImage from 'react-background-image-loader';
const Logo = styled.img`
    height:75px;
`;
class App extends Component {
  render() {
    return (
      <BackgroundImage src={require('./assets/tile.jpg')}  className="composite">  
          <div className="footer">
              <ul>
                  <li><Logo src={require('./assets/logo.png')} className="logo" alt="logo" /></li>
                  <li>Home And Away</li>
              </ul>
          </div>
        </BackgroundImage>
    );
  }
}

export default App;
