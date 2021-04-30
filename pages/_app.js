import '../styles/globals.scss'
import UserContext from '../components/UserContext'

function App({ Component, pageProps }) {
  return (
    <UserContext.Provider value={pageProps.user}>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}

export default App
