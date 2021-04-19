import { useState } from 'react'
import FilmGrid from './FilmGrid'
import FilmModal from './FilmModal'

const FilmDashboard = ({ films }) => {
  const [activeFilm, setActiveFilm] = useState(false)

  const toggleActiveFilm = (_, film = false) => setActiveFilm(film)

  return (
    <>
      <FilmGrid films={films} toggleActiveFilm={toggleActiveFilm} />
      {activeFilm && (
        <FilmModal
          activeFilm={activeFilm}
          toggleActiveFilm={toggleActiveFilm}
        />
      )}
    </>
  )
}

export default FilmDashboard
