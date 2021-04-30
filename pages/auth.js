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
      <main className={styles.container}>
        <form onSubmit={e => signup(e)}>
          <input type='email' name='email' required={true} />
          <input type='text' name='password' required={true} />
          <button onClick={() => setLoginMode(false)}>SIGN UP</button>
          <button onClick={() => setLoginMode(true)}>LOG IN</button>
        </form>
      </main>
    </>
  )
}
