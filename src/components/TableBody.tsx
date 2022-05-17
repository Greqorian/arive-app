import { TableColumn, TableRowColumn } from './sharedComponents/TableElements'
import HobbyForm from './HobbyForm'
import UserForm from './UserForm'
import UserList from './UserList'
import HobbiesList from './HobbiesList'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveUser, addUser } from '../redux/usersManager'

import { RootState } from '../redux/store'
import '../styles/globalStyles.scss'

const TableBody = () => {
  const users = useSelector((state: RootState) => state.usersManager.users)
  const activeUser = useSelector(
    (state: RootState) => state.usersManager.activeUser
  )
  const dispatch = useDispatch()
  const handleUser = (value: number | string) => {
    if (typeof value === 'number') {
      dispatch(setActiveUser(value))
    }
    if (typeof value === 'string') {
      dispatch(addUser(value))
    }
  }

  return (
    <TableRowColumn isBorder>
      <TableColumn isScrollable>
        <UserForm handleUser={handleUser} />
        <UserList
          activeUser={activeUser}
          users={users}
          handleUser={handleUser}
        />
      </TableColumn>

      <TableColumn isScrollable isLarge>
        <HobbyForm />
        <HobbiesList />
      </TableColumn>
    </TableRowColumn>
  )
}

export default TableBody
