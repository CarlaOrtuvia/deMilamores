import React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Banner/>
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer greeting="Listado de todos los productos" />
          }
        />
        <Route
          path="/category/:id"
          element={<ItemListContainer greeting="Listado de categoria:" />}
        />
       <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}
