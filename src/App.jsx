import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const itens = [
    {
      nome: 'PSVR2 SHOWCASE CARREGADOR E DISPLAY STAND VR2',
      img: '/img/psvr.png',
      valor: 'R$589,90',
      desconto: false,
      vdesc: 'R$403,16',
    },
    {
      nome: 'NINTENDO SWITCH PRO CONTROLLER ZELDA TEARS OF THE KINGDOM',
      img: '/img/maneteZelda2.png',
      valor: 'R$ 1.076,28',
      desconto: true,
      vdesc: 'R$983,16',
    },
    {
      nome: 'NINTENDO SWITCH OLED LEGEND OF ZELDA TEARS OF THE KINGDOM',
      img: '/img/switch1.png',
      valor: 'R$ 4.495,90',
      desconto: false,
      vdesc: 'R$4290,90',
    },

  ]

  return (
    <div className="App">
      <h1>Monstruario de produtos</h1>
      <div className="container">
      {itens.map(item=> <Card nome={item.nome} img={item.img} valor={item.valor} desconto ={item.desconto} vdesc={item.vdesc}/>)}
      </div>
    </div>
  )
}

export default App
