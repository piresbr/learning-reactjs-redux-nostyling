import { useDispatch, useSelector } from 'react-redux';
import styles from './Busca.module.scss';
import { changeSearch, clearSearch } from 'store/reducers/busca';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Busca() {
  const search = useSelector(state => state.search)
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    dispatch(clearSearch())
  }, [location.pathname, dispatch])

  return (
    <div className={styles.busca}>
      <input
        className={styles.input}
        placeholder="O que você procura?"
        value={search}
        onChange={(e) => dispatch(changeSearch(e.target.value))}
      />
    </div>
  )
}