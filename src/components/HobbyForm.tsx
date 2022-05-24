import { TableRow, TableCell } from './sharedComponents/TableElements'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addHobby } from '../redux/usersManager'

import '../styles/InputForm.scss'

const HobbyForm = () => {
  const dispatch = useDispatch()

  const passionRef = useRef<HTMLSelectElement>(null)
  const dateRef = useRef<HTMLSelectElement>(null)
  const hobbyTypeRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (
      passionRef.current?.value &&
      dateRef.current?.value &&
      hobbyTypeRef.current?.value
    ) {
      dispatch(
        addHobby({
          type: hobbyTypeRef.current?.value,
          passion: passionRef.current?.value,
          date: dateRef.current?.value,
        })
      )
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <TableRow>
        <TableCell>
          <select
            id="passion-select"
            name="passion"
            className="select-control"
            ref={passionRef}
          >
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
            <option value="high">very-high</option>
          </select>
        </TableCell>
        <TableCell isLarge={true}>
          <input
            className="input-control-long"
            name="hobby_type"
            type="text"
            placeholder="Enter user hobby"
            maxLength={30}
            ref={hobbyTypeRef}
          />
        </TableCell>
        <TableCell>
          <select
            id="date-select"
            name="date"
            className="select-control"
            ref={dateRef}
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

        <button type="submit">➕</button>
      </TableRow>
    </form>
  )
}

export default HobbyForm
