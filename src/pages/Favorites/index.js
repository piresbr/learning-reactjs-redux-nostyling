import React from 'react';
import Header from "components/Header";
import styles from './Favorites.module.scss';
import { useSelector } from "react-redux";
import Item from "components/Item";

export default function Favorites() {
    const favorites = useSelector(state => state.favorites)
    const itens = useSelector(state => state.itens);
    const search = useSelector(state => state.search);
    const regexp = new RegExp(search, 'i');


    function getFavorites(favorites, itens) {
        return favorites.map(itemInFavorites => {
            const item = itens.find(item => item.id === itemInFavorites.id);
            console.log(item)
            if (item.titulo.match(regexp)) {
                return { ...item, favorito: true };
            }
            return null
        }).filter(item => item !== null)
    }

    const favoritesList = getFavorites(favorites, itens)

    return (
        <>
            <Header
                titulo={'Lista de favoritos'}
                descricao={'Todos os itens favoritados irão aparecer nessa lista'}
            />


            <div className={styles.favorites}>
                {favoritesList.map(favorite => (
                    <Item key={favorite.id} {...favorite} favorites />
                ))}
            </div>
        </>
    )
}