import Head from 'next/head';
import Header from '../components/Header';
import FilmDashboard from '../components/FilmDashboard.js';
import dbConnect from '../utils/dbConnect';
import Film from '../models/Film';
import { getSession, signOut } from 'next-auth/client';

import styles from '../styles/Home.module.scss';
// const films = require('../fake-data.json');

export default function UserPage({ films, session }) {
  console.log(films);
  return (
    <>
      <Head>
        <title>Criterion Collector</title>
      </Head>
      <Header />
      {session && <button onClick={() => signOut()}>log out</button>}
      <main className={styles.container}>
        <FilmDashboard films={films} />
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: '/auth'
      }
    };
  }
  await dbConnect();

  /* find all the data in our database */
  const result = await Film.find({});
  const films = result.map(doc => {
    const film = doc.toObject();
    film._id = film._id.toString();
    return film;
  });

  return { props: { films, session } };
}
