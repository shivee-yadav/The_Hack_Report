import React from 'react'
import { Navbar } from '../components/index'
import { SiAnaconda } from 'react-icons/si'

const Contact = () => {
  return (
    <section className='bg-black m-0 p-7' >
      <div class="m-0 text-white" >
      <SiAnaconda color="#fff" size={33}/>
      The<span> Hack </span>Report
      </div>
     <div className="container">
     
      <h2 class="text-5xl text-white font-bold text-center mt-10">Contact us</h2>
      <p class="text-2xl text-center text-white m-5">With the Internet spreading like wildfire and reaching every part of our daily life, more and more traffic is directed to websites in search for information.</p>
      <form >
        <div className="form-control">
          <input type="text" placeholder='Enter your Name'  />
          <input type="text" placeholder='Enter your Business Email' />
          <input type="text" placeholder='Enter your company name' />
          <input type="text" placeholder='Enter your Job title' />
          <input type="text" placeholder='Enter your reason for contact' />
          <input type="text" placeholder='Enter your phone number' />
          <input type="text" placeholder='Enter your country' />
          <button>submit</button>
        </div>
      </form>
      </div>
      </section>
  )
}

export default Contact