import React from 'react'
import Cart from './Cart'
import Mdeep from '../assets/image/desktop/image-deep-earth.jpg';
import Mnight from '../assets/image/desktop/image-night-arcade.jpg';
import Msoccer from '../assets/image/desktop/image-soccer-team.jpg';
import Mgrid from '../assets/image/desktop/image-grid.jpg';
import Mfromabove from '../assets/image/desktop/image-from-above.jpg';
import MPocketborealis from '../assets/image/desktop/image-pocket-borealis.jpg';
import MCuriosity from '../assets/image/desktop/image-curiosity.jpg';
import Mfisheye from '../assets/image/desktop/image-fisheye.jpg';

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
            fname = "deep"
            lname = "Earth"
          />
          <Cart
            imgSrc={Mnight}
            fname = "Night"
            lname = "arcade"
          />
          <Cart
            imgSrc={Msoccer}
            fname = "soccer"
            lname = "team vr"
          />
          <Cart
            imgSrc={Mgrid}
            fname = "the"
            lname = "grid"
          />
          <Cart
            imgSrc={Mfromabove}
            fname = "form up"
            lname = "above vr"
          />
          <Cart
            imgSrc={MPocketborealis}
            fname = "pocket"
            lname = "borealis"
          />
          <Cart
            imgSrc={MCuriosity}
            fname = "the"
            lname = "curiosity"
          />
          <Cart
            imgSrc={Mfisheye}
            fname = "make it"
            lname = "fisheye"
          />
        </div>

      </section>
    </>
  )
}

export default Creation
