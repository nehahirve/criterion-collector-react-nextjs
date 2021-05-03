import styled from 'styled-components'

export const StyledWindow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledModal = styled.div`
  height: 60vh;
  max-width: 100vw;
  min-width: 600px;
  border: 2px solid black;
  border-radius: 2%;
  background: white;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  font-family: 'Aeroport Light';
`
export const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
export const StyledForm = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  textarea {
    font-family: 'Aeroport Light';
    width: 100%;
    border: 2px solid black;
    border-radius: 10px;
    margin: 2rem 0;
    &:focus {
      border: 2px solid magenta;
      outline: none;
    }
  }
  .bottomBar {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: baseline;
    a {
      text-decoration: underline;
    }
  }
`

export const StyledCloseButton = styled.button`
  border: 2px solid black;
  border-radius: 20%;
  background: magenta;
  width: 2rem;
  height: 2rem;
  font-family: 'Aeroport';
  box-shadow: -5px 5px rgba($color: #000000, $alpha: 0.3);
`

export const StyledSaveButton = styled.button`
  border: 2px solid black;
  box-shadow: -5px 5px rgba($color: #000000, $alpha: 0.3);
  background: magenta;
  border-radius: 10px;
  padding: 0 2rem;
  height: 2rem;
  font-family: 'Aeroport';
`
