import { TableRow, TableCell } from './sharedComponents/TableElements'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addHobby } from '../redux/usersManager'
import { RootState } from '../redux/store'

import '../styles/InputForm.scss'

const HobbyForm = () => {
  const [type, setType] = useState('')
  const [passion, setPassion] = useState('low')
  const [date, setDate] = useState('2000')

  const dispatch = useDispatch()

  const dipatchHobby = () => {
    if (type !== '') {
      dispatch(addHobby({ type: type, passion: passion, date: date }))
    }
  }

  return (
    <TableRow>
      <TableCell>
        <select
          id="passion-select"
          name="passion-select"
          value={passion}
          onChange={(e) => setPassion(e.target.value)}
        >
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
      </TableCell>
      <TableCell isLarge={true}>
        <input
          className="input-control-long"
          type="text"
          placeholder="Enter user hobby"
          maxLength={30}
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </TableCell>
      <TableCell>
        <select
          id="date-select"
          name="date-select"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        >
          {Array.from(Array(20)).map((a, i) => {
            return (
              <option key={i} value={2000 + i}>
                {2000 + i}
              </option>
            )
          })}
        </select>
      </TableCell>

      <button
        className="button"
        onClick={() => {
          dipatchHobby()
        }}
      >
        ➕
      </button>
    </TableRow>
  )
}

export default HobbyForm
