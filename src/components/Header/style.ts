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

 #id_select_netflix{
     width:115px ;
     height:40px ;
     margin: 0 32px 0 12px;
     position: absolute;
     bottom:-15px ;
     left:-168px;
     padding:0px ;
 }

img{
    padding-top:10px ;
}

div{
    position: relative;
    display: inline-block;
    
}

 `