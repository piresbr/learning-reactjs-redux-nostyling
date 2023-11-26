import styles from './Navbar.module.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import classNames from 'classnames';
import {
  RiShoppingCart2Line,
  RiShoppingCartFill
} from 'react-icons/ri';
import Busca from '../Busca';
import { Link, useLocation } from 'react-router-dom';

const iconeProps = {
  color: 'white',
  size: 24
}

export default function Navbar() {
  const location = useLocation()
  return (
    <nav className={styles.nav}>
      <Logo className={styles.logo} />
      <div className={styles.links}>
        <Link to='/' className={classNames(styles.link, {
          [styles.selected]: location.pathname === '/'
        })}>
          Página inicial
        </Link>
        <Link to={'/favorites'} className={classNames(styles.link, {
          [styles.selected]: location.pathname === '/favorites'
        })}>
          Favoritos
        </Link>
      </div>
      <div className={styles.busca}>
        <Busca />
      </div>
      <div className={styles.icones}>
        <Link to="/cart">
          {location.pathname === '/cart'
            ? <RiShoppingCartFill {...iconeProps} />
            : <RiShoppingCart2Line {...iconeProps} />
          }
        </Link>
      </div>
    </nav>
  )
}