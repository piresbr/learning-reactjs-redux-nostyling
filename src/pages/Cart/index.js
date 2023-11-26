import React from 'react';
import styles from './Carrinho.module.scss';
import Header from 'components/Header';
import { useSelector } from 'react-redux';
import Item from 'components/Item';

function Cart() {
    const cart = useSelector(state => state.cart);
    const itens = useSelector(state => state.itens);
    const search = useSelector(state => state.search);
    let total = 0;
    const regexp = new RegExp(search, 'i');

    function transformCart(cart, itens) {
        return cart.map(itemInCart => {
            const item = itens.find(item => item.id === itemInCart.id);
            total += (item.preco * itemInCart.quantity)
            //se o titulo do item for igual a pesquisa, ele retorna um objeto com os itens correspondendes, + o total e a quantidade
            if (item.titulo.match(regexp)) {
                return { ...item, quantity: itemInCart.quantity, total: total };
            }
            //senao ele retorna null
            return null;
        }).filter(item => item !== null); //se o itens que ele retornar for diferente de null, ele mostra os itens filtrados pela pesquisa. Caso a pesquisa esteja vazia, ele retorna todos os itens, pois o regex ja faz isso
    }

    const cartTransformed = transformCart(cart, itens);

    return (
        <>
            <Header
                titulo={"Carrinho de compras"}
                descricao={"Confira todos os produtos adicionados ao carrinho. "}
            />

            <div className={styles.carrinho}>

                {cartTransformed.map(item => (
                    <Item key={item.id} {...item} cart />
                ))}

                {cartTransformed.length === 0 && (
                    <>
                        <span style={{ display: 'inline-block', width: '100%', textAlign: 'center', fontSize: '18px', fontWeight: '700' }}>
                            Não há produto para exibir
                        </span>
                    </>
                )}

                <div className={styles.total}>
                    <strong>Resumo da compra</strong>
                    <span>Subtotal: <strong>{total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</strong></span>
                </div>
            </div>
        </>
    );
}

export default Cart;
