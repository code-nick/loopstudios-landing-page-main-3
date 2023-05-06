import React from 'react'
import intract from "../assets/image/desktop/image-interactive.jpg"


const intractive = () => {
  return (
    <>
      <section className='intractive'>
        <div className='intractive__intractive-iamge'>
            <img src={intract} alt="" />
        </div>
        <div className='intractive__title'>
          <h1>The leader in interactive vr</h1>
          <p>founded in 2011,loopstudio has been producing world-class virtual really project for some of the best componies around the globe. Our award-wining creations have transformed businesses throught digital experiences that bind to their brand.</p>
        </div>
      </section>
    </>
  )
}

export default intractive
