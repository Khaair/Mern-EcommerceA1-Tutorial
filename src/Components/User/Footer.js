import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <div>
    <div className='footerContainers'>
      <div className='fone'>
        <ul>
          <li> About</li>
          <li> We are hiring!</li>
          <li> Terms &amp; Conditions</li>
          <li> Privacy Policy</li>
          <li> Terms &amp; Conditions</li>
        </ul>

      </div>

      <div className='ftwo'>
        <ul>
          <a href><li>Contact Us</li></a>
          <a href><li>CUSTOMER SERVICE</li></a>
          <a href><li>Shipping & Replacement</li></a>
          <a href><li> Privacy Policy</li></a>
          <a href><li> Terms of Use</li></a>
        </ul>
      </div>

      <div className='fthree'>
        <ul>
          <a href><li> About</li></a>
          <a href><li> We are hiring!</li></a>
          <a href><li> Terms &amp; Conditions</li></a>
          <a href><li> Privacy Policy</li></a>
          <a href><li> Terms &amp; Conditions</li></a>
        </ul>
      </div>

      <div className='ffour'>
        <div className='iosNandroid'>
          <img src="img/ios.png" style={{ width: '150px', height: '60px', marginTop: '10px' }} alt="..." />
          <img src="img/android.png" style={{ width: '150px', height: '60px', marginTop: '10px' }} alt="..." />
        </div>

      </div>

      <div className='ffive'>
        <ul>
          <a href><li> About</li></a>
          <a href><li> We are hiring!</li></a>
          <a href><li> Terms &amp; Conditions</li></a>
          <a href><li> Privacy Policy</li></a>
          <a href><li> Terms &amp; Conditions</li></a>
        </ul>
        <div>
          <div className='uui'>
            <a href="www.fb.com" className="fa fa-facebook" />
            <a href="#" className="fa fa-twitter" />
            <a href="#" className="fa fa-google" />
            <a href="#" className="fa fa-linkedin" />
          </div>

        </div>


      </div>

      <div className='fsix'>
        <p>Copyright © 2021 BD ECom, a concern of Invariant Telecom Bangladesh Ltd.</p>

      </div>
    </div>
  </div>
  )
}
