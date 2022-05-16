import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type HobbyType = {
  type: string
  passion: string
  date: string
}

export type UsersType = {
  id: number
  name: string
  hobbies: HobbyType[]
}

export interface IUsersState {
  activeUser: number
  users: UsersType[]
}

export const initialState: IUsersState = {
  activeUser: 1,
  users: [],
}

export const counterSlice = createSlice({
  name: 'usersManager',
  initialState,
  reducers: {
    setActiveUser: (state, action: PayloadAction<number>) => {
      state.activeUser = action.payload
    },

    addUser: (state, action: PayloadAction<string>) => {
      state.users.push({
        id: state.users.length + 1,
        name: action.payload,
        hobbies: [],
      })
    },

    addHobby: (state, action: PayloadAction<HobbyType>) => {
      let uid = state.activeUser

      state.users[uid - 1].hobbies.push({
        type: action.payload.type,
        passion: action.payload.passion,
        date: action.payload.date,
      })
    },

    removeHobby: (state, action: PayloadAction<number>) => {
      let uid = state.activeUser
      state.users[uid - 1].hobbies.splice(action.payload, 1)
    },

    loadStorage: (state, action: PayloadAction<UsersType[]>) => {
      if (action.payload !== undefined) {
        state.users = action.payload
      }
    },
  },
})

export const { setActiveUser, addUser, addHobby, loadStorage, removeHobby } =
  counterSlice.actions

export default counterSlice.reducer
