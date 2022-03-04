    import { Container, Content } from "./style"
    import logoImg from '../../assets/netflix-logo-167.png';

    export function Header(){
        
        return (
            <Container>
                <Content>
                    
                   <span><img src={logoImg} alt="Logo" /></span> 
                  <div>
                      <select>
                        <option value="/br/">Português</option>
                        <option value="/br/">Inglês</option>
                    </select>
                  </div>
                    

                    <a href="">Entrar</a>
                </Content>
            </Container>
            )
        
    }