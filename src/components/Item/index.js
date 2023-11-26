import styles from './Item.module.scss';
import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillMinusCircle,
  AiFillPlusCircle
} from 'react-icons/ai';
import {
  FaCartPlus
} from 'react-icons/fa';
// import { mudarFavorito } from 'store/reducers/itens';
import { useDispatch, useSelector } from 'react-redux';
import { changeCart, changeQuantity } from 'store/reducers/carrinho';
import { changeFavorites } from 'store/reducers/favorites';
import classNames from 'classnames';

const iconeProps = {
  size: 24,
  color: '#041833',
};

const quantityProps = {
  size: 24,
  color: '#1875e8',
}

export default function Item(props) {
  const {
    titulo,
    foto,
    preco,
    descricao,
    id,
    quantity,
    cart,
    favorites,
  } = props;
  const dispatch = useDispatch();
  const inCart = useSelector(state => state.cart.some(item => item.id === id))
  const inFavorites = useSelector(state => state.favorites.some(item => item.id === id))

  function resolverFavorito() {
    // dispatch(mudarFavorito(id));
    dispatch(changeFavorites(id))
  }

  function resolveCart() {
    dispatch(changeCart(id))
  }

  return (
    <div className={classNames(styles.item, { [styles.itemNoCarrinho]: cart, [styles.itemInFavorites]: favorites })}>
      <div className={styles['item-imagem']}>
        <img src={foto} alt={titulo} />
      </div>
      <div className={styles['item-descricao']}>
        <div className={styles['item-titulo']}>
          <h2>{titulo}</h2>
          <p>{descricao}</p>
        </div>
        <div className={styles['item-info']}>
          <div className={styles['item-preco']}>
            {preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </div>
          <div className={styles['item-acoes']}>
            {inFavorites
              ? <AiFillHeart {...iconeProps} color='#ff0000' className={styles['item-acao']} onClick={resolverFavorito} />
              : <AiOutlineHeart {...iconeProps} className={styles['item-acao']} onClick={resolverFavorito} />
            }
            {cart
              ?
              (
                <>
                  <div className={styles.quantidade}>
                    Quantidade:
                    <AiFillMinusCircle {...quantityProps} onClick={() => {
                      if (quantity >= 1) {
                        dispatch(changeQuantity({ id, quantity: - 1 }))
                      }
                    }} />
                    <span>{String(quantity || 0).padStart(2, '0')}</span>
                    <AiFillPlusCircle {...quantityProps}
                      onClick={() => {
                        if (quantity >= 1) {
                          dispatch(changeQuantity({ id, quantity: + 1 }))
                        }
                      }}
                    />
                  </div>
                </>
              )
              :
              (
                <>
                  <FaCartPlus
                    {...iconeProps}
                    color={inCart ? '#1875E8' : iconeProps.color}
                    className={styles['item-acao']}
                    onClick={resolveCart}
                  />
                </>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}