import React from 'react'
import '../style/footer.css'
import Card from '../logos/card.png'
import MasterCard from '../logos/mastercard.png'
import Paypal from '../logos/paypal.png'
import Visa from '../logos/visa.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer1'>
        <div className='box'>
          <p className='logo' >iShop</p>
          This ia a E-commerce website<br/>
          for electronic gadgets<br/>
          click it! get it
        </div>
        <div className='box'>
         <p className='follow-us'>Follow Us</p>
          follow us on instagram,faceboock <br/>
          and other socal-media platforms
         
        </div>
        <div className='box'>
        <p className='follow-us'>Contact Us</p>
        iShop: aderess building 124 <br/>
          Call us now:0123-456-789<br/>
          Email:iShopsupport@123
        </div>
      </div>

      <div className='footer2'>
          <div className='box2'>
            <p className='heading1'>Catogary</p>
              <div className='list1'>
              <p><Link to='/mobile'>Mobile</Link></p> 
              <p> <Link to='/laptop'>Laptop</Link></p> 
              <p> <Link to='/tablet'>Tablets</Link></p> 
              <p> <Link  to='/assessories'>Accessories</Link></p> 
             </div>
          </div>
          <div className='box2'>
            <p className='heading1'>Brands</p>
              <div className='list1'>
              <p><Link to='/generic2/iphone'>Apple</Link></p> 
              <p> <Link to='/generic2/oneplus'>OnePlus</Link></p> 
              <p> <Link  to='/generic2/vivo'>Vivo</Link></p> 
             </div>
          </div>
          <div className='box2'>
            <p className='heading1'>Extras</p>
              <div className='list1'>
              <p><Link to='/generic2/iphone'>Apple</Link></p> 
              <p> <Link to='/generic2/oneplus'>OnePlus</Link></p> 
              <p> <Link  to='/generic2/vivo'>Vivo</Link></p> 
             </div>
          </div>
          <div className='box2'>
            <p className='heading1'>My Account</p>
              <div className='list1'>
              <p><Link to='/aboutus'>About Us</Link></p> 
              <p> <Link to='/information'>Infomation</Link></p> 
              <p> <Link  to='/policy'>Privacy Policy</Link></p> 
             </div>
          </div>
          {/* <div className='box2'>
            <p className='heading1'>UseFul Links</p>
              <div className='list1'>
                <p>About Us </p>
                <p>Infomation </p>
                <p>Privacy Policy </p>
                <p>Terms & Conditions</p>
             </div>
          </div>
          <div className='box2'>
            <p className='heading1'>Our Offers</p>
              <div className='list1'>
                <p>About Us </p>
                <p>Infomation </p>
                <p>Privacy Policy </p>
                <p>Terms & Conditions</p>
             </div>
          </div> */}
      </div>
      <div className='footer3'>
         <img src={Card} alt='not found' className='payments'/>
         <img src={MasterCard} alt='not found' className='payments'/>
         <img src={Visa} alt='not found' className='payments'/>
         <img src={Paypal} alt='not found' className='payments'/>
         
      </div>
    </div>
  )
}

export default Footer
