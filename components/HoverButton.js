import styles from '../styles/HoverButton.module.scss'

const HoverButton = props => {
  return (
    <button
      className={styles.hoverButton}
      onClick={e => {
        console.log('button clicekd')
        props.toggleActiveFilm(e, props.film)
        e.stopPropagation()
      }}
    >
      +
    </button>
  )
}

export default HoverButton
