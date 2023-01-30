import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import HomeMain from '../components/home/homeMain'
import useHome from '../hooks/useHome';
import { fetchReadHeroPokemons } from '../redux/thunks/homeThunks';

const HomePage = () => {

  const dispatch = useDispatch();
  const { heroPokemons } = useHome();

  useEffect(()=> {
    dispatch(fetchReadHeroPokemons());
  }, []);

  return (
    <HomeMain heroPokemons={heroPokemons}/>
  )
}

export default HomePage