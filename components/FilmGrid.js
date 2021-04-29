import { useState } from 'react';
import styles from '../styles/FilmGrid.module.scss';
import Film from './Film';

const FilmGrid = ({ films, toggleActiveFilm }) => {
  return (
    <>
      <ul className={styles.grid}>
        {films.map(film => (
          <Film
            key={film._id}
            film={film}
            toggleActiveFilm={toggleActiveFilm}
          />
        ))}
      </ul>
    </>
  );
};

export default FilmGrid;
