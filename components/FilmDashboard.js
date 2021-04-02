import { useState } from 'react'
import FilmGrid from './FilmGrid'
import FilmModal from './FilmModal'

const FilmDashboard = ({ films }) => {
  const [activeFilm, setActiveFilm] = useState(true)

  const toggleActiveFilm = (_, film = false) => {
    console.log(film)
    setActiveFilm(film)
    console.log(activeFilm)
  }

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
