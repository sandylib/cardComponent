import React, { Component} from 'react';

import styled from 'styled-components';


import Background from './assets/tile.jpg';
import BackgroundImage from './ImageBackgroundLoaderComponent';
const Logo = styled.img`
    height:75px;
`;

 const Mask = styled.ul`
    width:100%;  
     display:table-row;    
     position: absolute;    
     bottom: 0;
    list-style-type: none;
    background: rgba(0, 0,0, 0.6);
    padding:0;
    margin: 0;
    vertical-align: center;
 `;

  const Item = styled.li`
    display: table-cell;
    list-style-type: none;
    vertical-align: middle;
    font-size: 25px;
    color: white;
    line-height: 18px;
 `;

class App extends Component {
  render() {
    return (
      <BackgroundImage src={require('./assets/tile.jpg')}  className="composite">  
          
              <Mask>             
                  <Item><Logo src={require('./assets/logo.png')} className="logo" alt="logo" /></Item>
                  <Item>Home And Away</Item>
             </Mask>
          
        </BackgroundImage>
    );
  }
}

export default App;
