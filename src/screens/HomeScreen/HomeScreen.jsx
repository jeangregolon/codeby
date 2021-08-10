import React from 'react'
import './homeScreen.scss'

export default function HomeScreen(){
    return(
        <div className='row'>
            <button>Carrinho 1 <div>Sem frete</div></button>
            <button>Carrinho 2 <div>Com frete</div></button>
        </div>
    )
}