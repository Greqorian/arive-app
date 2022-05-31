import { TableRow, TableCell } from './sharedComponents/TableElements'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addHobby } from '../redux/usersManager'
import SelectForm from './sharedComponents/Selectform'

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

  const yearsArr = Array.from(Array(20), (_, i) => 2000 + i)

  return (
    <form onSubmit={handleSubmit}>
      <TableRow>
        <TableCell>
          <SelectForm
            id={'passion-select'}
            name={'passion'}
            optionArray={['low', 'medium', 'high', 'very-high']}
            ref={passionRef}
          />
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
          <SelectForm
            id={'date-select'}
            name={'date'}
            optionArray={yearsArr}
            ref={dateRef}
          />
        </TableCell>

        <button type="submit">➕</button>
      </TableRow>
    </form>
  )
}

export default HobbyForm
