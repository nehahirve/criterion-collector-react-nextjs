import Head from 'next/head'
import { getSession } from 'next-auth/client'

import Header from '../components/Header'
import FilmDashboard from '../components/FilmDashboard.js'
import dbConnect from '../utils/dbConnect'
import Film from '../models/Film'
import User from '../models/User'
import styles from '../styles/Home.module.scss'
import addUserLayerToFilms from '../utils/userLayer'

export default function HomePage({ films }) {
  return (
    <>
      <Head>
        <title>Criterion Collector</title>
      </Head>
      <Header />
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

  films = addUserLayerToFilms(films, user)

  return { props: { films, user } }
}
