import Head from 'next/head'
import Header from '../components/Header'
import FilmDashboard from '../components/FilmDashboard.js'
import dbConnect from '../utils/dbConnect'
import Film from '../models/Film'
import User from '../models/User'
import { getSession, signOut } from 'next-auth/client'

import styles from '../styles/Home.module.scss'

export default function UserPage({ films }) {
  return (
    <>
      <Head>
        <title>Criterion Collector</title>
      </Head>
      <Header />
      <button onClick={() => signOut()}>log out</button>
      <main className={styles.container}>
        <FilmDashboard films={films} />
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req })
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: '/auth'
      }
    }
  }
  await dbConnect()

  /* find all the data in our database */
  const result = await Film.find({})
  let films = result.map(doc => {
    const film = doc.toObject()
    film._id = film._id.toString()
    return film
  })

  let user = await User.findOne({ email: session.user.email })
  user = user.toObject()
  user._id = user._id.toString()
  user.filmsSeen = user.filmsSeen.map(film => {
    return Object.assign({}, film, { _id: film._id.toString() })
  })

  const ids = user.filmsSeen.map(film => film.id)

  films = films.map(film => {
    if (ids.includes(film._id)) {
      const userFilm = user.filmsSeen.find(x => x.id === film._id)
      console.log(userFilm)
      return Object.assign({}, film, {
        notes: userFilm.notes,
        seen: userFilm.seen
      })
    } else return film
  })

  return { props: { films, user } }
}
