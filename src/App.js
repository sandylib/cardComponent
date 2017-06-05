import React, { Component} from 'react';

import styled from 'styled-components';
import myImage from './assets/tile.jpg';

const ImageBackgroundWarp = styled.div`
    background-image: url(${myImage});
    background-repeat: no-repeat;
    background-position: center;  
    background-size: cover;
    width:350px;
    margin-left: auto;
    margin-right: auto;   
    min-height: 250px;
    position: relative;  
`;

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
      <ImageBackgroundWarp>  
              <Mask>             
                  <Item><Logo src={require('./assets/logo.png')}  alt="logo" /></Item>
                  <Item>Home And Away</Item>
             </Mask>
          
        </ImageBackgroundWarp>
    );
  }
}

export default App;
