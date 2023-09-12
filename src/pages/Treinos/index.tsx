import * as S from './styles'
import checkin from '../../assets/Group 7.png'
import arquivo from '../../assets/arquivo.pdf'

export function Treinos() {
    return (
        <S.Section>
            <div>
                <h1>Tabela de treinos dessa semana</h1>
                <a href={arquivo} download>Clique aqui para visualizar</a>

                <p>Confirme sua presença nos treinos que deseja participar essa semana</p>
            </div>

            <div className='tabela-com-rolagem'>
                <table>
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Horário</th>
                            <th>Modalidade</th>
                            <th>Público</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> 31/05 <br /> Quarta-Feira</td>
                            <td> 14:00 - 17:30 </td>
                            <td> Tênis de Mesa</td>
                            <td> Todos interessados</td>
                            <td><a href="#"><img src={checkin} alt="checkin" /></a></td>
                        </tr>
                        <tr>
                            <td> 31/05 <br /> Quarta-Feira</td>
                            <td> 14:00 - 17:30 </td>
                            <td> Xadrez</td>
                            <td> Todos interessados</td>
                            <td><a href="#"><img src={checkin} alt="checkin" /></a></td>
                        </tr>
                        <tr>
                            <td> 31/05 <br /> Quarta-Feira</td>
                            <td> 14:00 - 15:30 </td>
                            <td> Basquete</td>
                            <td> Intercampi <br /> Misto</td>
                            <td><a href="#"><img src={checkin} alt="checkin" /></a></td>
                        </tr>
                        <tr>
                            <td> 31/05 <br /> Quarta-Feira</td>
                            <td> 15:00 - 16:00 </td>
                            <td> Treino físico</td>
                            <td> Intercampi <br /> Misto</td>
                            <td><a href="#"><img src={checkin} alt="checkin" /></a></td>
                        </tr>
                        <tr>
                            <td> 31/05 <br /> Quarta-Feira</td>
                            <td> 15:30 - 17:30 </td>
                            <td> Vôlei</td>
                            <td> Intercampi <br /> Misto</td>
                            <td><a href="#"><img src={checkin} alt="checkin" /></a></td>
                        </tr>
                        <tr>
                            <td> 01/06 <br /> Quinta-Feira</td>
                            <td> 14:30 - 15:50 </td>
                            <td> Basquete </td>
                            <td> Intercampi <br /> Masculino </td>
                            <td><a href="#"><img src={checkin} alt="checkin" /></a></td>
                        </tr>
                        <tr>
                            <td> 02/06 <br /> Sexta-Feira</td>
                            <td> 16:30 - 17:30 </td>
                            <td> Treino físico</td>
                            <td> Todos interessados</td>
                            <td><a href="#"><img src={checkin} alt="checkin" /></a></td>
                        </tr>

                    </tbody>
                </table>
            </div>


        </S.Section>
    )
}