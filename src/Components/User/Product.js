import React from 'react'
import './Product.css'

export default function Product(props) {
  return (
  
    <div className="col-sm-4">
      <div className="card cardd">
        <div className="card-body">
          <div className='pcardmaincon'>
            <img style={{ height: '150px', width: "100%" }} src='img/laptopp.jpg' alt='loo' />

            <div className='pcardmainchild'>
              <img  style={{ height: '50px', cursor: "pointer" }} src='img/wishlistt.png' alt='kii' />

            </div>
          </div>

          <h5 className="card-title">Title: {props.item.title}</h5>
          <p className="card-text">Price: {props.item.price}</p>
          <p className="card-text">Brand: {props.item.brand}</p>




          <button className="default-btn">Add to Cart</button>

        </div>
      </div>
    </div>

  )
}
