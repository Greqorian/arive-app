import Container from './sharedComponents/Container'
import Spacer from './sharedComponents/Spacer'
import { TableRow, TableColumn } from './sharedComponents/TableElements'
import TableBody from './TableBody'
import { loadStorage } from '../redux/usersManager'
import { useDispatch } from 'react-redux'
import { useQuery } from 'react-query'

const LandingPage = () => {
  const dispatch = useDispatch()
  const { isLoading, error, data } = useQuery('usersData', () =>
    fetch(`http://${process.env.REACT_APP_NETWORK_IP}:3005`).then((res) =>
      res.json()
    )
  )

  const loadBody = () => {
    if (isLoading) return <TableRow> Loading...</TableRow>
    if (error) return <TableRow>An error has occurred</TableRow>
    if (data) {
      dispatch(loadStorage(data.users))
      return <TableBody />
    }
  }

  return (
    <Container>
      <Spacer />

      <TableColumn isScrollable={false} isLarge={true}>
        <div className="header">
          <TableRow isBorder>
            <h2>☁️ User Hobbies</h2>
          </TableRow>

          {loadBody()}
        </div>
      </TableColumn>

      <Spacer />
    </Container>
  )
}

export default LandingPage
