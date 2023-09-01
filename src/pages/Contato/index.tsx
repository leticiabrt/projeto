import * as S from './styles'
import email from '../../assets/email.png'
import whats from '../../assets/whats.webp'

export function List() {
  return (
    <S.Section>
      <section id="topo">
        <ol>
          <li>
            <a href="#resp1">Tem idade mínima e máxima?</a>
          </li>
          <li>
            <a href="#resp2">Há treinos em algum outro horário?</a>
          </li>
          <li>
            <a href="#resp3">Tem algum custo?</a>
          </li>
          <li>
            <a href="#resp4">Quantas pessoas costumam participar?</a>
          </li>
          <li>
            <a href="#resp5">Ainda precisa de ajuda?</a>
          </li>
        </ol>
      </section>
      <section id="resp1">
        <h3>Não tem idade mínima nem máxima, mas sugerimos que os frequentadores sejam maiores de 14 anos. <br /> 
        Preferimos não impor uma idade mínima pois algumas crianças, apesar da idade, possuem um bom conhecimento do esporte. <br />
        Em relação a idade máxima, basta ter disposição que são todos bem vindos.</h3>
        <br />
          <a href="#topo">Voltar</a>
      </section> 
      <section id="resp2">
        <h3>Infelizmente nosso projeto acontece apenas uma vez por semana, que é na quarta-feira, por conta da disponibilidade dos responsáveis e da quadra.</h3>
        <br />
          <a href="#topo">Voltar</a>
      </section>
      <section id="resp3">
        <h3>Nossos encontros semanais são totalmente gratuitos. <br />
        O CEFET-MG nos empresta a quadra e os instrumentos para realização dos jogos, fazendo com que não tenhamos custos.</h3>
        <br />
          <a href="#topo">Voltar</a>
      </section>
      <section id="resp4">
        <h3>Limitamos nossas vagas semanais a 18 pessoas, isso porque desejamos que todos possam aproveitar ao máximo o treino e, para isso, é melhor que haja menos pessoas. <br />
        Com isso, além de um melhor aproveitamento dos participante, é possível darmos atenção a todos.</h3>
        <br />
          <a href="#topo">Voltar</a>
      </section>
      <section id="resp5">
        <h2>Entre em contato conosco pelo email: <br />
          britotpleticia@gmail.com</h2>
          <img src={email} alt="email" />
        <h2>Ou entre no nosso grupo do whatsapp: <br />
        (link)</h2>
        <img src={whats} alt="whats" />
        <br />
          <a href="#topo">Voltar</a>
      </section>
    </S.Section>
  )
}
