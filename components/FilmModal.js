import styles from '../styles/FilmModal.module.scss'

const FilmModal = props => {
  return (
    <div className={styles.window}>
      <div className={styles.modal}>
        {JSON.stringify(props.activeFilm)}
        <button className={styles.close} onClick={props.toggleActiveFilm}>
          X
        </button>
        <form action=''>
          <textarea name='notes' id='' cols='30' rows='10'></textarea>
          <button>SAVE</button>
        </form>
      </div>
    </div>
  )
}

export default FilmModal
