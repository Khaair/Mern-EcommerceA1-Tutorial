import React from 'react'
import './Product.css'

export default function Product() {
  return (
    <div>
      <div className="card">
            <img className='imagee' src="img/p1.jpg" alt="Denim Jeans" />
            <h5>Tailored Jeans</h5>
            <p className="price">$19.99</p>
            <p>Some text about the jeans. </p>
            <p><button>Add to Cart</button></p>
          </div>
    </div>
  )
}
