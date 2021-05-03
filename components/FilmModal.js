import { useState, useContext } from 'react'
import UserContext from '../components/UserContext'
import styled from 'styled-components'

import {
  StyledModal,
  StyledWindow,
  StyledCloseButton,
  StyledSaveButton,
  StyledForm,
  StyledHeader
} from '../styles/film-modal-style'

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
    <StyledWindow>
      <StyledModal>
        <StyledHeader>
          <div className='info'>
            <p>Title: {activeFilm.title}</p>
            <p>Director: {activeFilm.director}</p>
            <p>Country: {activeFilm.country}</p>
            <p>Year: {activeFilm.year}</p>
          </div>
          <StyledCloseButton onClick={toggleActiveFilm}>X</StyledCloseButton>
        </StyledHeader>
        <StyledForm onSubmit={e => saveNotes(e)}>
          <textarea
            name='notes'
            rows={15}
            onChange={e => setNotes(e.target.value)}
            value={notes}
          ></textarea>
          <div className='bottomBar'>
            <StyledSaveButton>save</StyledSaveButton>
            <a href={activeFilm.externalUrl}>View on the Criterion Website</a>
          </div>
        </StyledForm>
      </StyledModal>
    </StyledWindow>
  )
}

export default FilmModal
