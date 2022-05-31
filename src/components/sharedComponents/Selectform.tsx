import { LegacyRef, forwardRef } from 'react'
import '../../styles/InputForm.scss'

type SelectFormType = {
  id: string
  name: string
  optionArray: string[] | number[]
}

const SelectForm = forwardRef<HTMLSelectElement, SelectFormType>(
  ({ id, name, optionArray }, ref) => {
    return (
      <select id={id} name={name} className="select-control" ref={ref}>
        {optionArray.map((o, index) => {
          return (
            <option key={index} value={o}>
              {o}
            </option>
          )
        })}
      </select>
    )
  }
)

export default SelectForm
