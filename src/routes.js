import PaginaPadrao from 'components/PaginaPadrao';
import Cart from 'pages/Cart';
import Categoria from 'pages/Categoria';
import Favorites from 'pages/Favorites';
import Home from 'pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path='/categoria/:nomeCategoria' element={<Categoria />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/favorites' element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}