import { useState } from 'react'
import Image from 'next/image'

import styles from '../styles/Film.module.scss'

const Film = ({ film }) => {
  const [seen, setSeen] = useState(false)

  const toggleSeen = () => setSeen(!seen)

  return (
    <li className={styles.film}>
      <Image
        src={film.coverUrl}
        width={400}
        height={500}
        onClick={toggleSeen}
        className={seen ? styles.seen : styles.unseen}
      />
      {!seen && (
        <p
          style={{ backgroundImage: `url(${film.coverUrl})` }}
          onClick={toggleSeen}
        >
          {film.spine}
        </p>
      )}
    </li>
  )
}

export default Film
