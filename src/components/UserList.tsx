import { TableRow, TableCell } from './sharedComponents/TableElements'
import '../styles/UserList.scss'
import { UsersType } from '../redux/usersManager'

type UserListType = {
  activeUser: number
  users: UsersType[]
  handleUser: (value: number | string) => void
}

const UserList = ({ activeUser, users, handleUser }: UserListType) => {
  return (
    <>
      {users &&
        users.map((u) => {
          return (
            <span
              key={u.id}
              className={activeUser === u.id ? 'highlight-row' : 'clickable'}
              onClick={() => handleUser(u.id)}
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
