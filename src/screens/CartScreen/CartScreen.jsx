import React, {useEffect, useState} from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import './cartScreen.scss'
import { items as items1, value as value1 } from '../../data/abaixo-10-reais.json'
import { items as items2, value as value2 } from '../../data/acima-10-reais.json'

export default function CartScreen(){
  const [products, setProducts] = useState(items1)
  const [value, setValue] = useState(value1)
  const [cartType, setCartType] = useState('')

  useEffect(() => {
    if(cartType === 'semFrete'){
      setProducts (items1)
      setValue(value1/100)
    } else if (cartType === 'comFrete'){
      setProducts (items2)
      setValue(value2/100)
    }
  }, [cartType, value]);

  return(
    <div className='container'>
       <div className='row'>
        <button 
        className='cart-button' 
        onClick={() => setCartType('semFrete')}>
          Carrinho 1 
          <div>Sem frete</div>
        </button>
        <button 
          className='cart-button' 
          onClick={() => setCartType('comFrete')}>
            Carrinho 2
            <div>Com frete</div>
          </button>
    </div>
      <h1 className='title'>Meu carrinho</h1>
      { 
          products.map((product) => (
            <ProductCard product={product}/>
          ))
      }
      
      <div className='total-n-shipping'>
        <div className='total-price'>
          <span>Total</span>
         <span>R${value.toString().replace(".", ",")}</span>
        </div>
        <div>
        {value >= 10 ? 
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