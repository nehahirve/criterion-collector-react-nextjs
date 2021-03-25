import styles from '../styles/FilmGrid.module.scss'
import Image from 'next/image'

const FilmGrid = ({ films }) => {
  return (
    <ul className={styles.grid}>
      {films.map(film => (
        <li style={{ display: 'flex' }}>
          <Image src={film.coverUrl} width={400} height={500} />
        </li>
      ))}
    </ul>
  )
}

export default FilmGrid
