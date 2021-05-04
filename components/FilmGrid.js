import Film from './Film'

const FilmGrid = ({ films, toggleActiveFilm }) => {
  return (
    <>
      <ul>
        {films.map(film => (
          <Film
            key={film._id}
            film={film}
            toggleActiveFilm={toggleActiveFilm}
          />
        ))}
      </ul>
      <style jsx>{`
        ul {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        }
      `}</style>
    </>
  )
}

export default FilmGrid
