import { configureStore } from '@reduxjs/toolkit';
import categoriasSlice from './reducers/categorias';
import itensSlice from './reducers/itens';
import cartSlice from './reducers/carrinho';
import searchSlice from './reducers/busca';
import favoritesSlice from './reducers/favorites';

const store = configureStore({
  reducer: {
    categorias: categoriasSlice,
    itens: itensSlice,
    cart: cartSlice,
    favorites: favoritesSlice,
    search: searchSlice,
  }
});

export default store;