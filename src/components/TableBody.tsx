import { TableColumn, TableRowColumn } from './sharedComponents/TableElements'
import HobbyForm from './HobbyForm'
import UserForm from './UserForm'
import UserList from './UserList'
import HobbiesList from './HobbiesList'
import '../styles/globalStyles.scss'

const TableBody = () => {
  return (
    <TableRowColumn isBorder>
      <TableColumn isScrollable>
        <UserForm />
        <UserList />
      </TableColumn>

      <TableColumn isScrollable isLarge>
        <HobbyForm />
        <HobbiesList />
      </TableColumn>
    </TableRowColumn>
  )
}

export default TableBody
