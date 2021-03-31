import styles from '../styles/FilmGrid.module.scss'
import Film from './Film'

const FilmGrid = ({ films }) => {
  return (
    <ul className={styles.grid}>
      {films.map(film => (
        <Film key={film.id} film={film} />
      ))}
    </ul>
  )
}

export default FilmGrid
