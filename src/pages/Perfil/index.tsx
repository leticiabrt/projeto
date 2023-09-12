import * as S from './styles'
import perfil from '../../assets/perfil.png'

export function Perfil() {
    return (
        <S.Section>
            <div>
                <h1>Seus Dados</h1>
                <p> Nome completo: ************************************ </p>
             
                <p> Data de nascimento: **/**/**** </p>
             
                <p> CPF: ***.***.***-** </p>
              
                <p> Telefone: (**) *****-**** </p>
               
                <p> Sexo: ******** </p>
            
                <p> Categoria: iniciante / aprendiz / experiente </p>
            </div>
           
            <div>
                <a href="#"><img src={perfil} alt="perfil" /></a>
            </div>
    </S.Section>
  )
}
