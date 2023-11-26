import styles from './Header.module.scss';
import { useLocation } from 'react-router-dom'

export default function Header({ titulo, descricao, className = '', imagem }) {
  const { pathname } = useLocation()
  return (
    <header className={`${styles.header} ${className}`}>
      <div className={styles['header-texto']}>
        <h1>{titulo}</h1>
        <h2>{descricao}</h2>
      </div>
      {pathname !== '/cart' && pathname !== '/favorites' && (
        <div className={styles['header-imagem']}>
          <img
            alt={titulo}
            src={imagem}
          />
        </div>
      )}
    </header>
  )
}