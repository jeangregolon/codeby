import React from 'react'
import './productCard.scss'

export default function ProductCard(){
  const listPrice = 3.03
  const sellingPrice = 2.73
  return(
    <div className='card'>
      <img src="http://codeby.vteximg.com.br/arquivos/ids/159959-800-1029/truffon-meio-amargo.png?v=636930938547630000" alt="" />
      <div className='text-area'>
        <div className='product-name'>
          Trufa BENDITO CACAU 55% CACAU 30 G
        </div>
        {listPrice !== sellingPrice ? 
        (
          <div>
            <div className='price faded'>R$ {listPrice}</div>
            <div className='price'>R$ {sellingPrice}</div>
          </div>
        )
        :
        (
          <div className='price'>R$ {listPrice}</div>
        )

        }
      </div>
    </div>
  )
}