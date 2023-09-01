import * as S from './styles'
import Confirma from '../../assets/confirma.png'

export function Presenca() {
  return (
    <S.Section>
      <div>
        <p>
          Lista De Presença <br />
          Dia **/**
        </p>
      </div>

      <div className='tabela-com-rolagem'>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Confirmação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> ********************************************** </td>
              <td><a href="#"><img src={Confirma} alt="Confirma" /></a></td>
            </tr>
            <tr>
              <td> ********************************************** </td>
              <td><a href="#"><img src={Confirma} alt="Confirma" /></a></td>
            </tr>
            <tr>
              <td> ********************************************** </td>
              <td><a href="#"><img src={Confirma} alt="Confirma" /></a></td>
            </tr>
            <tr>
              <td> ********************************************** </td>
              <td><a href="#"><img src={Confirma} alt="Confirma" /></a></td>
            </tr>
            <tr>
              <td> ********************************************** </td>
              <td><a href="#"><img src={Confirma} alt="Confirma" /></a></td>
            </tr>
            <tr>
              <td> ********************************************** </td>
              <td><a href="#"><img src={Confirma} alt="Confirma" /></a></td>
            </tr>
            <tr>
              <td> ********************************************** </td>
              <td><a href="#"><img src={Confirma} alt="Confirma" /></a></td>
            </tr>
            <tr>
              <td> ********************************************** </td>
              <td><a href="#"><img src={Confirma} alt="Confirma" /></a></td>
            </tr>

          </tbody>
          <tfoot>
            <tr>
              <th>Total</th>
              <th> * confirmados</th>
            </tr>
          </tfoot>
        </table>
      </div>
      

    </S.Section>
  )
}