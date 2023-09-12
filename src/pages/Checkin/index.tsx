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
            <tr>
              <td> 09/08 </td>
              <td> AGOSTO </td>
              <td><a href="#"><img src={checkin} alt="checkin" /></a></td>
            </tr>
            <tr>
              <td> 16/08 </td>
              <td> AGOSTO </td>
              <td><a href="#"><img src={checkin} alt="checkin" /></a></td>
            </tr>
            <tr>
              <td> 23/08 </td>
              <td> AGOSTO </td>
              <td><a href="#"><img src={checkin} alt="checkin" /></a></td>
            </tr>
            <tr>
              <td> 30/08 </td>
              <td> AGOSTO </td>
              <td><a href="#"><img src={checkin} alt="checkin" /></a></td>
            </tr>
            <tr>
              <td> 06/09 </td>
              <td> SETEMBRO </td>
              <td><a href="#"><img src={checkin} alt="checkin" /></a></td>
            </tr>
            <tr>
              <td> 13/09 </td>
              <td> SETEMBRO </td>
              <td><a href="#"><img src={checkin} alt="checkin" /></a></td>
            </tr>
            <tr>
              <td> 20/09 </td>
              <td> SETEMBRO </td>
              <td><a href="#"><img src={checkin} alt="checkin" /></a></td>
            </tr>
            <tr>
              <td> 27/09 </td>
              <td> SETEMBRO </td>
              <td><a href="#"><img src={checkin} alt="checkin" /></a></td>
            </tr>
            <tr>
              <td> 04/10 </td>
              <td> OUTUBRO </td>
              <td><a href="#"><img src={checkin} alt="checkin" /></a></td>
            </tr>

            

          </tbody>
        </table>
      </div>
      

    </S.Section>
  )
}