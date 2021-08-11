import React from 'react'
import './productCard.scss'

export default function ProductCard(props){
  const {product} = props
  return(
    <div className='card' key={product.id}>
      <img src={product.imageUrl} alt="" />
      <div className='text-area'>
        <div className='product-name'>
         {product.name}
        </div>
        {product.listPrice !== product.sellingPrice ? 
        (
          <div>
            <div className='price faded'>R$ {product.listPrice}</div>
            <div className='price'>R$ {product.sellingPrice}</div>
          </div>
        )
        :
        (
          <div className='price'>R$ {product.listPrice}</div>
        )

        }
      </div>
    </div>
  )
}