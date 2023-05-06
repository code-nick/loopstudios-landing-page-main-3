import React from 'react'

const Cart = (props) => {
  return (
    <div className='cart'>
      <img src={props.imgSrc} alt="image" />
      <div className='cart__title'>
        <h1 className='cart__title__fname'>{props.fname}</h1>
        <h1 className='cart__title__fname'>{props.lname}</h1>
      </div>

    </div>
  )
}

export default Cart
