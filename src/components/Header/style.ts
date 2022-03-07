import styled from 'styled-components'

export const Container = styled.header`
    margin:0px;
    padding: 8px 0px 0px;  
`

 export const Content= styled.div`
     /* max-width: 1269px;   */
    margin: 0px 56px ;
    padding-top:8px ;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a{ 
        font-size:1rem;
        font-family: 'Helvetica';
        background: #e50914;
        color:#FFFFFF;
        text-decoration:none;
        padding:7px 17px;
        border-radius:3px ;
    }


    select{ 
        font-size: .875rem;
    height:36px;
    width:110px;
     padding-left: 1.375rem;
    padding-right: 1.375rem; 
    margin: 0 32px 0 12px;
    color:#FFFFFF;

    background: rgba(0,0,0,.4);
    background-image:url('../src/assets/arrow_here_go.png') ;
    text-align:center;
    border: 1px solid #aaa;

    
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    
    &::after {
            content: '&#x003E';		
            height: 24px;
			width: 24px;
			position: absolute;
			top: 10;
			right: 10;
		}
  

    /* white-space: nowrap; */



    border-radius: 2px;
 
}
img{
    padding-top:10px ;
}

div{
    position: relative;
    display: inline-block;
    
}

 `