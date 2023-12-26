import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='nav'>
        <div className="left">
          <img src='https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png' />
        </div>
        <div className="right">
          <ul>
            <li>Chennai</li>
            <li>Coimbatore</li>
            <li>Madurai</li>
            <li>Trichy</li>
          </ul>
        </div>
      </div>
      <marquee scrollamount="10">Recent collection books are available!</marquee>
    </>
  )
}

export default Navbar