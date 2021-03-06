import { signOut } from 'next-auth/client'

const Header = () => {
  return (
    <header>
      <h1>all criterion films</h1>
      <button onClick={() => signOut()}>log out</button>
      <style jsx>{`
        header {
          z-index: 100;
          font-family: 'Aeroport';
          background: white;
          width: 100%;
          height: 10vh;
          border-bottom: 2px solid black;
          border-radius: 10px;
          position: sticky;
          top: 0;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 1rem;
          h1 {
            position: absolute;
            left: 50vw;
            transform: translateX(-50%);
          }
          button {
            background: magenta;
            border-radius: 10px;
            padding: 0.4rem 1rem;
            font-size: 1.5rem;
            box-shadow: -5px 5px rgba($color: #000000, $alpha: 0.3);
            font-family: 'GTSuperDisplay';
          }
        }
      `}</style>
    </header>
  )
}

export default Header
