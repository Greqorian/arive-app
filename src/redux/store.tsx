import { configureStore } from '@reduxjs/toolkit'
import usersManager from './usersManager'

export const store = configureStore({
  reducer: {
    usersManager: usersManager,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
