import { useState, useContext } from 'react'
import UserContext from '../components/UserContext'
import styles from '../styles/FilmModal.module.scss'

const FilmModal = ({ activeFilm, toggleActiveFilm }) => {
  const [notes, setNotes] = useState(activeFilm.notes || '')
  const user = useContext(UserContext)

  const saveNotes = async e => {
    e.preventDefault()
    const result = await fetch(`/api/user/${user._id}/${activeFilm._id}`, {
      method: 'PUT',
      body: JSON.stringify({
        filmId: activeFilm._id,
        notes
      })
    }).then(res => res.json())
    console.log(result)
    activeFilm.notes = notes
    toggleActiveFilm()
  }

  return (
    <div className={styles.window}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={toggleActiveFilm}>
          X
        </button>
        <form onSubmit={e => saveNotes(e)}>
          <textarea
            name='notes'
            id=''
            cols='30'
            rows='10'
            onChange={e => setNotes(e.target.value)}
            value={notes}
          ></textarea>
          <button>SAVE</button>
        </form>
      </div>
    </div>
  )
}

export default FilmModal
