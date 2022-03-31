import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Pikachu from '../pages/Pokemon/Pikachu'

export default function Navigator() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='pokemon' element={<Pikachu/>} />
      </Routes>
    </BrowserRouter>
  )
}