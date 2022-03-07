import styled from 'styled-components'


export const Container = styled.div`
    padding: 85px 70px 70px 23px;
    margin:0px;
    box-sizing: border-box;
    display: block;


`
export const Content = styled.main`
    padding: 75px 0px;
    width: 100%;
    display: block;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0px auto;
    h1{

        margin: 0px 75px;
        font-family: 'Helvetica';
        font-size:3.85rem;
        color:#FFFFFF;
        max-width:800px;
        display: block;
        margin: 0 auto;
     
        font-weight: bold;
        text-align: center;
        
    }

    h2{
        font-family: 'Helvetica';
        color:#FFFFFF;
        font-size: 1.625rem;
        display: block;
        font-size: 1.7em;
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: normal;


    }
    h3{
        color:#FFFFFF;
        max-width: none;
        padding-bottom: 20px;
        font-size: 1.25rem;
        font-weight: normal;
        font-family: 'Helvetica';
        padding: 0px 48px 20px;
        margin: 0px 98px;
    }

    input{
        height: 58px;
        width:478px ;        
        box-sizing:content-box;
        padding:10px 10px 0px;

        ::-webkit-input-placeholder  { 
        font-size:15px }
        margin:auto;
        border-radius:3px 0px 0px 3px ;
            
    }

    button{position:relative;
        font-size: 1.775rem;
        height: 66.5px;
        width:150px ;
        box-sizing:content-box;
        margin:0px;
        padding: 0px 30px;
        background: #e50914;
        color: #FFFFFF;
        border-color:#f03c02;

    }

    .span_button{
        padding: 8px 0px;    
    }

  

`

