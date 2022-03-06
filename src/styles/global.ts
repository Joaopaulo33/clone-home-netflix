import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`

  *{
        margin:0px;
        padding:0px;
        box-sizing: border-box;
        font:sans-serif;
    }

    button{
        cursor: pointer;
    }
    
    body{
        background-image: url(/background_img.png);
        background-repeat: no-repeat;
        background-size: cover;
         width: 100%;
        height: 100%;

    }

`