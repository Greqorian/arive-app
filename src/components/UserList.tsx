import { TableRow, TableCell } from './sharedComponents/TableElements'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveUser } from '../redux/usersManager'

import { RootState } from '../redux/store'
import '../styles/UserList.scss'

const UserList = () => {
  const users = useSelector((state: RootState) => state.usersManager.users)
  const activeUser = useSelector(
    (state: RootState) => state.usersManager.activeUser
  )
  const dispatch = useDispatch()

  return (
    <>
      {users &&
        users.map((u) => {
          return (
            <span
              key={u.id}
              className={
                'clickable' + (activeUser === u.id ? 'highlight-row' : '')
              }
              onClick={() => dispatch(setActiveUser(u.id))}
            >
              <TableRow>
                <TableCell>{u.name}</TableCell>
              </TableRow>
            </span>
          )
        })}
    </>
  )
}

export default UserList
