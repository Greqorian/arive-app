import reducer, { addUser, addHobby } from './usersManager'
import { IUsersState, HobbyType } from './usersManager'

test('should return the initial state', () => {
  //@ts-ignore
  expect(reducer(undefined, {})).toEqual({
    activeUser: 1,
    users: [],
  })
})

test('should add new user to the store', () => {
  const previousState: IUsersState = {
    activeUser: 1,
    users: [],
  }
  expect(reducer(previousState, addUser('New Name'))).toEqual({
    activeUser: 1,
    users: [
      {
        id: 1,
        name: 'New Name',
        hobbies: [],
      },
    ],
  })
})

test('should add new hobby to the store', () => {
  const previousState: IUsersState = {
    activeUser: 1,
    users: [
      {
        id: 1,
        name: 'New Name',
        hobbies: [],
      },
    ],
  }

  const hobby: HobbyType = {
    type: 'New Hobby Type',
    passion: 'low',
    date: '2000',
  }
  expect(reducer(previousState, addHobby(hobby))).toEqual({
    activeUser: 1,
    users: [
      {
        id: 1,
        name: 'New Name',
        hobbies: [
          {
            type: 'New Hobby Type',
            passion: 'low',
            date: '2000',
          },
        ],
      },
    ],
  })
})
