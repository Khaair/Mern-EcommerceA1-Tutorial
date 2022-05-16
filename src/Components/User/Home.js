import React, { useEffect, useState } from 'react'
import axios from "axios";
import Footer from './Footer';
import './Home.css'
import Product from './Product'



function Home() {

  const [product, setProduct] = useState([]);

const fetch= async()=>{
  await axios.post(`http://localhost:5000/api/product/getProducts`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'auth': localStorage.getItem('auth')
    }
  }).then(res => {
    console.log(res)
    // console.log(res,'refrs')
    setProduct(res.data.products)

    // this.setState({profile:res.data})
  }).catch(err => {
    console.log(err)
  })
}

  useEffect( () => {
   
    try{
      fetch()
    }
catch(e){
  console.log(e)

}
  }, []);


  return (
   <>
   <div className='homecontainer'>
       <div className='hone'>
       <ul className="list-group honeul">
            <li className="list-group-item colorr">Categories</li>
            <li className="list-group-item colorr ">Electric</li>
            <li className="list-group-item colorr">Laptop & Computer</li>
            <li className="list-group-item colorr">Health & Beauty</li>
            <li className="list-group-item colorr">Mom And Baby</li>
            <li className="list-group-item colorr">Watches & Sunglasses</li>
            <li className="list-group-item colorr">Accessories</li>
            <li className="list-group-item colorr">Home & Living</li>
            <li className="list-group-item colorr">TGroceries</li>

          </ul>


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

       <div className="row" >
            {product.length && product.map((item, ind) => {
              return (

                <Product  key = {ind} item={item}/>
              )
            })}

          </div>

 
       </div>

       <div className='hfour'>

        <Footer/>
       </div>

   </div>
   </>
  )
}


export default Home;

