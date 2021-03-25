import Head from 'next/head'

import Header from '../components/Header'
import FilmGrid from '../components/FilmGrid'

import styles from '../styles/Home.module.scss'
const films = require('../fake-data.json')

export default function Home() {
  return (
    <>
      <Head>
        <title>Criterion Collector</title>
      </Head>
      <Header />
      <div className={styles.container}>
        <FilmGrid films={films} />
      </div>
    </>
  )
}
