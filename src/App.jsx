
import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'

function App() {
 
  const [bookmarks,setBookmarks]= useState([]);

  const HandleAddToBookMark= blog =>{
    // console.log(blog)
    const newBookmarks = [...bookmarks,blog]
    setBookmarks(newBookmarks);
  }

  return (
    <div className='w-3/4 mx-auto'>
      <Header/>

      <div className='flex md:flex-row flex-col gap-3 mt-8'>
      <Blogs HandleAddToBookMark={HandleAddToBookMark}/>
      <Bookmarks 
      bookmarks={bookmarks}
      />

      </div>
     
    </div>
  )
}

export default App
