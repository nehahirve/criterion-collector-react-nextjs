import Head from 'next/head'
import { signIn, signOut, useSession } from 'next-auth/client'
import { useState } from 'react'

import styles from '../styles/Home.module.scss'
// const films = require('../fake-data.json');

export default function HomePage() {
  const [loginMode, setLoginMode] = useState(false)
  const signup = async e => {
    e.preventDefault()
    const data = new FormData(e.target)
    const obj = {}
    data.forEach((value, name) => (obj[name] = value))
    if (!loginMode) {
      e.stopPropagation()
      const result = await fetch('/api/auth/signup', {
        body: JSON.stringify(obj),
        method: 'POST'
      })
    } else {
      e.stopPropagation()
      const result = await signIn('credentials', {
        ...obj,
        callbackUrl: '/'
      })
    }
  }

  return (
    <>
      <Head>
        <title>Criterion Collector</title>
      </Head>
      <main className={styles.auth}>
        <div className={styles.aboutWrapper}>
          <div>
            <span className={styles.about}>about </span>
            <span className={styles.this}>this</span>
          </div>
          <div className={styles.website}>
            <span>website</span>
          </div>
          <p>
            This is a student project, my first attempt at using NextJs +
            MongoDB to create a fullstack app. Read more on{' '}
            <a href='https://github.com/nehahirve/criterion-collector-react-nextjs'>
              github.
            </a>
          </p>
        </div>
        <form onSubmit={e => signup(e)}>
          <input type='email' name='email' required={true} />
          <input type='text' name='password' required={true} />
          <div className={styles.buttonGroup}>
            <button
              className={styles.signup}
              onClick={() => setLoginMode(false)}
            >
              sign up
            </button>
            <button className={styles.login} onClick={() => setLoginMode(true)}>
              log in
            </button>
          </div>
        </form>
      </main>
    </>
  )
}
