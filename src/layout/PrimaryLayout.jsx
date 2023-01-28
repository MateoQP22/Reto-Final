import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderPage from '../components/sections/HeaderPage'

const PrimaryLayout = () => {
  return (
    <>
      <HeaderPage />
      <main>
        <Outlet/>
      </main>
      <footer>Pie</footer>
    </>
  )
}

export default PrimaryLayout