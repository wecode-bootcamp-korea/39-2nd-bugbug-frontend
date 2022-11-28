import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  *{
    box-sizing:border-box;
    font-family:sans-serif;
  }
  body{
    min-width:1200px;
    overflow-x:auto;
  }
  .inner{
    margin:0 auto; 
    width:1160px;
  }
  .hidden {
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
  }

`;

export default GlobalStyle;
