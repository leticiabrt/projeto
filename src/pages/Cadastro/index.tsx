import * as S from './styles'

export function Cadastro() {
    return (
      <S.Section>


      <form action="" method="post">
        <fieldset>
        <p> Para realizar seu cadastro preencha as informações a seguir.  </p>

            <label htmlFor="nome">Nome Completo:</label><br />
            <input type="text" name="nome"/> <br/>

            <label htmlFor="dtNasc">Data de Nascimento</label><br />
            <input type="date" name="dtNasc"/><br />

            <label for="quantity">CPF:</label><br />
            <input type="number" id="cpf" name="cpf"></input> <br />

            <label htmlFor="email">Email:</label><br />
            <input type="email" name="email"/> <br/>

            <label htmlFor="telefone">Telefone:</label><br />
            <input type="tel" name="telefone" pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"></input> <br />

            Sexo: 
                <input type="radio" name="sexo" value="masc" id="masc"/>
                <label htmlFor="masc">Masculino</label>
                <input type="radio" name="sexo" value="fem" id="fem"/>
                <label htmlFor="fem">Feminino</label><br />
            
                <label htmlFor="sug">Sugestão</label> <br/>
                <textarea name="sug" id="sug" cols="96" rows="10" required></textarea><br />

                

        </fieldset>
        
        <fieldset>
        Crie uma senha de acesso: <br />
        <input type="text" name="senha"/> <br /> <br /> <br />

        <button type="submit" value="enviar">Cadastrar</button>
        <button type="reset" value="limpar">Limpar</button>
        </fieldset>
        </form>
        
      </S.Section>
    )
  }