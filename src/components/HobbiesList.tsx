import { TableRow, TableCell } from './sharedComponents/TableElements'

import { useSelector, useDispatch } from 'react-redux'
import { removeHobby } from '../redux/usersManager'

import { RootState } from '../redux/store'
import '../styles/globalStyles.scss'

const HobbiesList = () => {
  const users = useSelector((state: RootState) => state.usersManager.users)
  const activeUser = useSelector(
    (state: RootState) => state.usersManager.activeUser
  )
  const dispatch = useDispatch()

  const user = users.find((u) => u.id === activeUser)

  return (
    <>
      {user?.hobbies?.map((h, index) => {
        return (
          <TableRow key={index}>
            <TableCell>{h.passion}</TableCell>
            <TableCell isLarge>{h.type}</TableCell>
            <TableCell>{h.date}</TableCell>
            <button
              className="button"
              onClick={() => dispatch(removeHobby(index))}
            >
              ➖
            </button>
          </TableRow>
        )
      })}
    </>
  )
}

export default HobbiesList
