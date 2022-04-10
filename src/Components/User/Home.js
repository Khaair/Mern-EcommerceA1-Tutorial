import React from 'react'
import './Home.css'
import Product from './Product'


export default function Home() {
  return (
   <>
   <div className='homecontainer'>
       <div className='hone'>
        one

       </div>

       <div className='htwo'>
       <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="img/p1.jpg" style={{ width: '950px', height: '400px' }} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="img/p2.jpg" style={{ width: '950px', height: '400px' }} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="img/p3.jpg" style={{ width: '950px', height: '400px' }} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        

       </div>

       <div className='hthree'>

        <div className='divcard'>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        </div>

        <div className='divcard'>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        </div>

        <div className='divcard'>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        </div>
       </div>

       <div className='hfour'>

        four
       </div>

   </div>
   </>
  )
}
