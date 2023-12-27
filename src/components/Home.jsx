import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa"
import Book from './Book'
import axios from 'axios'

const Home = () => {

  const [search, setSearch] = useState('')
  const [books, setBooks] = useState([])

  const searchIt = (event) =>{
    if(event.key === 'Enter'){
      axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
      .then(result=>setBooks(result.data.items))
      .catch(error=>console.log(error))
    }
  }

  return (
    <>
        <div className='head'>
          <div className='text'>
            <h1>A Good Book Is Equal To <br/>Thousand Teachers...,</h1>
            <h2>Welcome to the library,<br/> Your search ends here....,</h2>
          </div>
          <div className='search'>
            <input 
              type="text" 
              name="" id="" 
              placeholder='Here you go...,' 
              className='input'
              value={search}
              onChange={e=> setSearch(e.target.value)}
              onKeyPress={searchIt}
              />
            <button  onClick={searchIt}  className='btn2'><FaSearch className='btn'/></button>
          </div>
        </div>
        <div className='cont'>
          {<Book books={books} />}
        </div>
    </>
  )
}

export default Home