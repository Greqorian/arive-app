import { LegacyRef, MutableRefObject } from 'react'
import '../../styles/InputForm.scss'

type SelectFormType = {
  id: string
  name: string
  optionArray: string[]
  ref: MutableRefObject<HTMLSelectElement> | null
}

const SelectForm = ({ id, name, optionArray, ref }: SelectFormType) => {
  return (
    <select id={id} name={name} className="select-control" ref={ref}>
      {optionArray.map((o, index) => {
        return <option value={o}>{o}</option>
      })}
      {/* <option value="low">low</option>
  <option value="medium">medium</option>
  <option value="high">high</option>
  <option value="high">very-high</option> */}
    </select>
  )
}

export default SelectForm
