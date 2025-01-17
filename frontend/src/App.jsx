import { useState } from 'react'
import './App.css'

let iniState = {
  
}

function App() {
  

  const onClick = (e)=>{
    
  }

  const onFormSubmit = (e)=>{
    
  }

  return (
    <div className='app'>
      <div className='nav' >
        <div><img src="./assets/logo1.png" alt="" /></div>
        <div><button>Register</button></div>
      </div>
      <div className='section-one' >
        <div>
          <h2>Integration for H2S Hackathon 2025</h2>
          <img src="./assets/img1.png" alt="" />
        </div>
        <div className='register-form'>
          <form>
            <h1>Build with H2S to win $14000</h1>
            <label htmlFor="name">Full Name</label>
            <input type="text" id='name' name='name' className='name' placeholder='Enter your full name here' />
            <label htmlFor="mobile">Contact Number</label>
            <input type="number" id='mobile' name='mobile' className='mobile' placeholder='Enter your full name here' />
            <label htmlFor="country">Select Your Country</label>
            <input type="text" id='country' name='country' className='country' placeholder='Enter your full name here' />
            <label htmlFor="email">Email ID</label>
            <input type="email" id='email' name='email' className='email' placeholder='Enter your full name here' />
            <label htmlFor="name">Company Name</label>
            <input type="text" id='company' name='company' className='company' placeholder='Enter your full name here' />

            <button  >Register</button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default App
