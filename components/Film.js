import { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import UserContext from '../components/UserContext'

import styles from '../styles/Film.module.scss'

const Film = ({ film, toggleActiveFilm }) => {
  const [loaded, setLoaded] = useState(false)
  const [seen, setSeen] = useState(film.seen)
  const [hovered, setHovered] = useState(false)
  const user = useContext(UserContext)

  const update = async seen => {
    const result = await fetch(`/api/user/${user._id}/${film._id}`, {
      method: 'PUT',
      body: JSON.stringify({
        filmId: film._id,
        seen
      })
    }).then(res => res.json())
    console.log(result)
  }

  useEffect(() => {
    if (loaded) {
      update(seen)
    }
  }, [seen])

  useEffect(() => {
    setLoaded(true)
  }, [])

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
        onClick={() => setSeen(false)}
      />

      {!seen && (
        <p
          style={{ backgroundImage: `url(${film.coverUrl})` }}
          onClick={() => setSeen(true)}
        >
          {film.spine}
        </p>
      )}
    </li>
  )
}

export default Film
