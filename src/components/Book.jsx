import React, { useState } from 'react'
import Preview from './Preview'

const Book = ({books}) => {
  const [view, setView] = useState(false)
  const [bookItem, setBookItem] = useState()
  console.log(books)
  return (
    <>
      <div className='cont'>

        {books.map((item)=>{

          let thumb = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail
          let name = item.volumeInfo.title
          let price = item.saleInfo.listPrice && item.saleInfo.listPrice.amount

          if(thumb != undefined && price != undefined){
            return(
              <div className='book_main'>
                <div className='book'>
                  <div className='up' onClick={()=>{setView(true); setBookItem(item)}}>
                    <img src={thumb}/>
                  </div>
                  <div className='down'>
                    <h3 className='book_title'>{name}</h3>
                    <p>₹{price}</p>
                  </div>
                </div>
              </div>
            )
          }
        })}
      </div>
      <Preview view={view} item={bookItem} onClose={()=> setBookItem(false)}/>
    </>
  )
}

export default Book