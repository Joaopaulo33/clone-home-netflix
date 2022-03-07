    import { Container, Content } from "./style"
    import logoImg from '../../assets/netflix-logo.png';

    export function Header(){
        
        return (
            <Container>
                <Content>
                    
                   <span><img src={logoImg} alt="Logo" /></span> 
                  <div>
                      <div>
                        <select>
                            <option value="/br/">Português</option>
                            <option value="/us/">Inglês</option>
                        </select>
                      </div>
                    <a href="">Entrar</a>
                    </div>
                    
                </Content>
            </Container>
            )
        
    }