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
    
    body {
        background-size: 900px; ;
        background-image: url(/background_img.png);
    }
`