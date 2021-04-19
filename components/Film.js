import { useState } from 'react'
import Image from 'next/image'

import styles from '../styles/Film.module.scss'

const Film = ({ film, toggleActiveFilm }) => {
  const [seen, setSeen] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <li
      className={styles.film}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <button
          className={styles.hoverButton}
          onClick={_ => toggleActiveFilm(_, film)}
        >
          +
        </button>
      )}
      <Image
        src={film.coverUrl}
        width={400}
        height={500}
        className={seen ? styles.seen : styles.unseen}
        onClick={() => setSeen(!seen)}
      />

      {!seen && (
        <p
          style={{ backgroundImage: `url(${film.coverUrl})` }}
          onClick={() => setSeen(!seen)}
        >
          {film.spine}
        </p>
      )}
    </li>
  )
}

export default Film
