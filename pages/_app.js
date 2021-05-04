import '../styles/globals.scss'
import { createContext } from 'react'

const UserContext = createContext()

function App({ Component, pageProps }) {
  return (
    <UserContext.Provider value={pageProps.user}>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}

export default App
