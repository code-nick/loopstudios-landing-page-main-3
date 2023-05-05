import React from 'react'
import Cart from './Cart'
import Mdeep from '../assets/image/desktop/image-deep-earth.jpg'
import Mnight from '../assets/image/desktop/image-night-arcade.jpg'
import Msoccer from '../assets/image/desktop/image-soccer-team.jpg'
import Mgrid from '../assets/image/desktop/image-grid.jpg'
import Mfromabove from '../assets/image/desktop/image-from-above.jpg'
import MPocketborealis from '../assets/image/desktop/image-pocket-borealis.jpg'
import MCuriosity from '../assets/image/desktop/image-curiosity.jpg'
import Mfisheye from '../assets/image/desktop/image-fisheye.jpg'







function Creation() {
  return (
    <>
      <section className='creation'>
        <div className='creation__box'>
          <div className='creation__box__tittle'>
            <h1>Our Creations</h1>
          </div>
          <div className='creation__box__btn'>
            <span>See all</span>
          </div>

        </div>
        <div className='creation__image'>
          <Cart
            imgSrc={Mdeep}
              fname="Soccer"
              lname="team VR"
            className='mdeep'/>
          <Cart
            imgSrc={Mnight}
             />
          <Cart
            imgSrc={Msoccer}
             />
          <Cart
            imgSrc={Mgrid}
             />
          <Cart
            imgSrc={Mfromabove}
             />
          <Cart
            imgSrc={MPocketborealis}
             />
          <Cart
            imgSrc={MCuriosity}
             />
          <Cart
            imgSrc={Mfisheye}
             />
        </div>

      </section>
    </>
  )
}

export default Creation
