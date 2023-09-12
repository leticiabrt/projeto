import React, { useState } from 'react';
import * as S from './styles';
import email from '../../assets/email.png';
import whats from '../../assets/whats.webp';

export function List() {
  const [activePanels, setActivePanels] = useState([]);

  const toggleAccordion = (index) => {
    const updatedPanels = [...activePanels];
    if (updatedPanels.includes(index)) {
      updatedPanels.splice(updatedPanels.indexOf(index), 1);
    } else {
      updatedPanels.push(index);
    }
    setActivePanels(updatedPanels);
  };

  const accordionData = [
    {
      question: 'Tem idade mínima e máxima?',
      answer:
        'Não tem idade mínima nem máxima, mas sugerimos que os frequentadores sejam maiores de 14 anos. Preferimos não impor uma idade mínima pois algumas crianças, apesar da idade, possuem um bom conhecimento do esporte. Em relação a idade máxima, basta ter disposição que são todos bem vindos.',
    },
    {
      question: 'Há treinos em algum outro horário?',
      answer:
        'Infelizmente nosso projeto acontece apenas uma vez por semana, que é na quarta-feira, por conta da disponibilidade dos responsáveis e da quadra.',
    },
    {
      question: 'Tem algum custo?',
      answer:
        'Nossos encontros semanais são totalmente gratuitos. O CEFET-MG nos empresta a quadra e os instrumentos para realização dos jogos, fazendo com que não tenhamos custos.',
    },
    {
      question: 'Quantas pessoas costumam participar?',
      answer:
        'Limitamos nossas vagas semanais a 18 pessoas, isso porque desejamos que todos possam aproveitar ao máximo o treino e, para isso, é melhor que haja menos pessoas. Com isso, além de um melhor aproveitamento dos participantes, é possível darmos atenção a todos.',
    },
  ];

  return (
    <S.Section>
      <h1>Dúvidas Frequentes</h1>
      <div className="teste">
        {accordionData.map((data, index) => (
          <div key={index}>
            <button className={`accordion ${activePanels.includes(index) ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
              {data.question}
            </button>
            <div className="panel" style={{ display: activePanels.includes(index) ? 'block' : 'none' }}>
              <p>{data.answer}</p>
            </div>
          </div>
        ))}
        

        <h1>Ainda precisa de ajuda?</h1>
        <h2>Entre em contato conosco pelo email: <br />
          britotpleticia@gmail.com</h2>
        <img src={email} alt="email" />
        <h2>Ou entre no nosso grupo do whatsapp: <br />
          (link)</h2>
        <img src={whats} alt="whats" />
        <br />
      </div>
    </S.Section>
  );
}
