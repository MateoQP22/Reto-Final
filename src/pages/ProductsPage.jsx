import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import MainProductos from '../components/productos/MainProductos'
import useProducts from '../hooks/useProducts';
import { fetchReadHeroProducts } from '../redux/thunks/productsThunks';

const ProductsPage = () => {

  const dispatch = useDispatch();
  const { heroProducts } = useProducts();

  useEffect(()=> {
    dispatch(fetchReadHeroProducts());
  }, []);

  return (
    <MainProductos heroProducts={heroProducts}/>
  )
}

export default ProductsPage