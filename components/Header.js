import React from 'react'
import styles from '../styles/Header.module.scss'
import { signOut } from 'next-auth/client'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>all criterion films</h1>
      <button onClick={() => signOut()}>log out</button>
    </header>
  )
}

export default Header
