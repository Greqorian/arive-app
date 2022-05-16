import React from 'react'
import './App.scss'
import './styles/globalStyles.scss'
import { QueryClient, QueryClientProvider } from 'react-query'
//import { store } from './redux/store'
//import { Provider } from 'react-redux'

import LandingPage from './components/LandingPage'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <div className="App">
      {/* <Provider store={store}> */}
      <QueryClientProvider client={queryClient}>
        <LandingPage />
      </QueryClientProvider>
      {/* </Provider> */}
    </div>
  )
}

export default App
