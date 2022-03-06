import {Container,Content} from './style'
export function Summary (){
    return(

        <Container>
            <Content>
                 <h1>Filmes, séries e muito mais. Sem limites.</h1>
                 <h2>Assista onde quiser. Cancele quando quiser.</h2>
                 <h3>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</h3>
                 
                    <span>
                        <input type="text"></input>
                      <button>
                          <span class="span_button">Vamos lá</span>
                      </button>
                    </span>
            </Content>           
        </Container>
    )
}