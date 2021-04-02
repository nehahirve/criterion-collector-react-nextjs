import styles from '../styles/FilmModal.module.scss'

const FilmModal = props => {
  return (
    <div className={styles.window}>
      <div className={styles.modal}>
        {JSON.stringify(props.activeFilm)}
        <button
          className={styles.close}
          onClick={props.toggleActiveFilm}
        ></button>
      </div>
    </div>
  )
}

export default FilmModal
