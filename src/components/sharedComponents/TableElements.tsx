import '../../styles/TableElements.scss'

type TableRowType = {
  isBorder?: boolean
  children: React.ReactNode
}

type TableRowColumnType = {
  isBorder?: boolean
  children: React.ReactNode
}

type TableColumnType = {
  isScrollable?: boolean
  isLarge?: boolean
  children: React.ReactNode
}

type TableCellType = {
  isLarge?: boolean
  children: React.ReactNode
}

export const TableRow = ({ isBorder, children }: TableRowType) => {
  const border = isBorder ? 'border' : ''
  return <div className={`flex-row ${border}`}>{children}</div>
}

export const TableRowColumn = ({ isBorder, children }: TableRowColumnType) => {
  const border = isBorder ? 'border' : ''
  return <div className={`flex-row-column ${border}`}>{children}</div>
}

export const TableColumn = ({
  isScrollable,
  isLarge,
  children,
}: TableColumnType) => {
  const size = isLarge ? 'width-70' : 'width-30'
  const scrollable = isScrollable ? 'scrollable' : ''
  return <div className={`flex-column ${size} ${scrollable}`}>{children}</div>
}

export const TableCell = ({ isLarge, children }: TableCellType) => {
  const size = isLarge ? 'width-70' : 'width-30'
  return <div className={`padding ${size}`}>{children}</div>
}
