import {Container,Content} from './style'
import arrow_here_go from '../../assets/arrow_here_go.png';

export function Summary (){
    return(

        <Container>
            <Content>
                 <h1>Filmes, séries e muito mais. Sem limites.</h1>
                 <h2>Assista onde quiser. Cancele quando quiser.</h2>
                 <h3>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</h3>
                 
                    <span>
                        <input type="text" placeholder="Email"></input>
                      <button class="btn btn_danger">
                          <span class="span_button">Vamos lá<span><img src={arrow_here_go} alt="arrow_here_go" /></span> </span>
                      </button>
                    </span>
            </Content>           
        </Container>
    )
}