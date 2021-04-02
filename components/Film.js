import { useState } from 'react'
import Image from 'next/image'

import FilmModal from './FilmModal'
import HoverButton from './HoverButton'

import styles from '../styles/Film.module.scss'

const Film = ({ film, toggleActiveFilm }) => {
  const [seen, setSeen] = useState(false)
  const [hovered, setHovered] = useState(false)

  const toggleSeen = e => {
    setSeen(!seen)
    e.stopPropagation()
  }

  return (
    <li
      className={styles.film}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <HoverButton toggleActiveFilm={toggleActiveFilm} film={film} />
      )}
      <Image
        src={film.coverUrl}
        width={400}
        height={500}
        className={seen ? styles.seen : styles.unseen}
        onClick={e => {
          toggleSeen(e)
        }}
      />

      {!seen && (
        <p
          style={{ backgroundImage: `url(${film.coverUrl})` }}
          onClick={e => {
            toggleSeen(e)
          }}
        >
          {film.spine}
        </p>
      )}
    </li>
  )
}

export default Film
