import { useState } from 'react'
import { signIn } from 'next-auth/client'
import Head from 'next/head'

import styles from '../styles/Home.module.scss'

export default function AuthPage() {
  const [loginMode, setLoginMode] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    e.stopPropagation()
    const data = {}
    new FormData(e.target).forEach((value, name) => (data[name] = value))
    loginMode ? login(data) : signup(data)
  }

  const signup = async data => {
    const res = await fetch('/api/auth/signup', {
      body: JSON.stringify(data),
      method: 'POST'
    })
    if (res.status === 201) {
      await login(data)
    } else {
      await res.json().then(res => setError(res.message))
    }
  }

  const login = async data => {
    await signIn('credentials', {
      ...data,
      callbackUrl: '/'
    })
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
        <form onSubmit={e => handleSubmit(e)}>
          <input
            type='email'
            name='email'
            required={true}
            placeholder='email'
          />
          <input
            type='text'
            name='password'
            required={true}
            placeholder='password'
          />
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
          {error && <div className={styles.error}>{error}</div>}
        </form>
      </main>
    </>
  )
}
