import UserList from './UserList'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'
import { TableRow } from './sharedComponents/TableElements'

configure({ adapter: new Adapter() })

const UserListDataMock = {
  activeUser: 1,
  users: [
    {
      id: 1,
      name: 'Susan Eagle',
      hobbies: [],
    },
    {
      id: 2,
      name: 'Yasmin Owl',
      hobbies: [],
    },
  ],
}

const handleUser = jest.fn()

const setup = () => {
  const wrapper = shallow(
    <UserList
      users={UserListDataMock.users}
      activeUser={UserListDataMock.activeUser}
      handleUser={handleUser}
    />
  )
  return wrapper
}

describe('UserList component', () => {
  it('finds 2 list items with user name', () => {
    const wrapper = setup()
    expect(wrapper.find(TableRow)).to.have.lengthOf(2)
    expect(wrapper.find('.clickable')).to.have.lengthOf(1)
  })

  it('simulates click on name item', () => {
    const wrapper = setup()
    wrapper.find('span.clickable').simulate('click')
    expect(handleUser.mock.calls.length).to.equal(1)
  })
})
