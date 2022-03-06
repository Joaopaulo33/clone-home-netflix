import { GlobalStyle } from '../../styles/global'
import { Header } from '../Header'
import { Summary } from '../Summary'
import {Container} from './style'
export function BackgroundStart(){
        
    return (
        <Container>
            <Header/>
            <GlobalStyle/>
            <Summary/>
        </Container>

    )
}