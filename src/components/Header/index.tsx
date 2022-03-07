    import { Container, Content } from "./style"
    import logoImg from '../../assets/netflix-logo.png';
    import select_netflix from '../../assets/select-netlfix.png';

    export function Header(){
        
        return (
            <Container>
                <Content>
                    
                   <span><img src={logoImg} alt="Logo" /></span> 
                  <div>
                      <div>
                            <img src={select_netflix} alt="Select" id="id_select_netflix" />
                      </div>
                    <a href="">Entrar</a>
                    </div>
                    
                </Content>
            </Container>
            )
        
    }