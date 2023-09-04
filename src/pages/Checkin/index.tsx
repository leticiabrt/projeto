import * as S from './styles'
import checkin from '../../assets/Group 7.png'

export function Checkin() {
  return (
    <S.Section>
      <div>
        <p>
          Faça seu checkin para o próximo treino:
        </p>
      </div>

      <div className='tabela-com-rolagem'>
        <table>
          <tbody>
            <tr>
              <td> 02/08 </td>
              <td> AGOSTO </td>
              <td><a href="#"><img src={checkin} alt="checkin" /></a></td>
            </tr>
            

          </tbody>
        </table>
      </div>
      

    </S.Section>
  )
}