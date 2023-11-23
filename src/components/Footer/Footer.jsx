import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>String Instruments</span>
          <span>Wind Instruments</span>
          <span>Others</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <sapn>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Sed maxime labore, doloribus hic praesentium asperiores vero 
          aut et in accusantium aliquid ipsa possimus tempore suscipit 
          adipisci alias, ut voluptate recusandae.
          </sapn>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Praesentium nostrum, aliquam obcaecati maiores vero corrupti facilis, 
            laboriosam reprehenderit ducimus voluptatum quisquam possimus maxime 
            blanditiis error ad sit quas, vel sed.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className='logo'>Musikstore</span>
          <span className="copyright">
            Copyright © 2023.All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="" alt="./img/payment.png" />
        </div>
      </div>
    </div>
  )
}

export default Footer
