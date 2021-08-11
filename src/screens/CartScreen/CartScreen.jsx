import React from 'react'
import {Link} from 'react-router-dom'
import './cartScreen.scss'

export default function CartScreen(){
  const totalPrice = 11

  return(
    <div className='container'>
      <h1 className='title'>Meu carrinho</h1>
      <h3>Card</h3>
      <h3>Card</h3>
      <h3>Card</h3>
      <h3>Card</h3>
      <div className='total-n-shipping'>
        <div className='total-price'>
          <span>Total</span>
          <span>R$9,99</span>
        </div>
        <div>
        {totalPrice > 10 ? 
          (
            <div className='free-shipping'>Parabéns, sua compra tem frete grátis!</div>
            ):(
              ""
              )}
        </div>
      </div>
      <button className='finish-btn'>Finalizar compra</button>
    </div>
  )
}