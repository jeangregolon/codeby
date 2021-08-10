import React from 'react'
import {Link} from 'react-router-dom'
import './homeScreen.scss'

export default function HomeScreen(){
  return(
    <div className='row'>
      <Link to='/carrinho' params={{ data: "sem-frete" }}>
        <button>Carrinho 1 <div>Sem frete</div></button>
      </Link>
      <Link to='/carrinho' params={{ data: "com-frete" }}>
        <button>Carrinho 2<div>Com frete</div></button>
      </Link>
    </div>
  )
}