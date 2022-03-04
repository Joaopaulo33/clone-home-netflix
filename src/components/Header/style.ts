import styled from 'styled-components'

export const Container = styled.header`
    margin: 20px 0px 0px;
    padding: 8px 0px 0px;

    span{ 
        margin-right:auto;
    }
    div{ 
        display: inline-block;
        direction: ltr;
        
    }
`

 export const Content= styled.div`
    margin: 0px 56px ;

    a{ 
        font-size:1rem;
        background: #e50914;
        color:#FFFFFF;
        text-decoration:none;
    }

    select{ 
    height:36px;
    width:110px;
    //background: rgba(0,0,0,.4);
    text-align:center;
    border: 1px solid #aaa;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: url(../assets/arrow-netflix-logo-167.png)
}

 `