const addUserLayerToFilms = (films, user) => {
  const ids = user.filmsSeen.map(film => film.id)

  return films.map(film => {
    if (ids.includes(film._id)) {
      const userFilm = user.filmsSeen.find(x => x.id === film._id)
      return Object.assign({}, film, {
        notes: userFilm.notes || '',
        seen: userFilm.seen || false
      })
    } else return film
  })
}

export default addUserLayerToFilms
