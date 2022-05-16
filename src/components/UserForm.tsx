import { useState } from 'react'
import { TableRow, TableCell } from './sharedComponents/TableElements'
import { useSelector, useDispatch } from 'react-redux'
import { addUser } from '../redux/usersManager'
import { RootState } from '../redux/store'

import '../styles/InputForm.scss'

const UserForm = () => {
  const [name, setName] = useState('')

  const users = useSelector((state: RootState) => state.usersManager.users)
  const dispatch = useDispatch()

  return (
    <TableRow>
      <TableCell>
        <input
          className="input-control"
          type="text"
          placeholder="Enter name"
          maxLength={15}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </TableCell>
      <button
        className="button"
        onClick={() => {
          if (name !== '') {
            dispatch(addUser(name))
          }
          setName('')
        }}
      >
        ➕
      </button>
    </TableRow>
  )
}

export default UserForm
