import { useState } from 'react'
import { TableRow, TableCell } from './sharedComponents/TableElements'
import '../styles/InputForm.scss'

type UserFormType = {
  handleUser: (value: number | string) => void
}

const UserForm = ({ handleUser }: UserFormType) => {
  const [name, setName] = useState('')

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
            handleUser(name)
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
