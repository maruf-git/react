
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import BookmarkMenu from './components/bookmark-menu/BookmarkMenu'
import Header from './components/header/Header'

function App() {
  //  bookmarks state
  const [bookmarkBlogs, setBookmarkBlogs] = useState([]);
  //  handle and update bookmarks
  const handleBookmarkBlogs = (bookmarkBlog) => {
    console.log("added to bookmarkBlog");
    const newBookmarkBlogs = [...bookmarkBlogs, bookmarkBlog];
    setBookmarkBlogs(newBookmarkBlogs);
  }
  // mark as read state
  const [readBlogs, setReadBlogs] = useState([]);
  // handle mark as read and remove read blog from bookmark list
  const handleMarkAsReadBlogs = (blogId) => {
    console.log("handled marked as read blogs", blogId);
    // removed read blog
    bookmarkBlogs.forEach(bookmarkBlog=>console.log("check:",bookmarkBlog));
    const remainingBookmarkBlogs=bookmarkBlogs.filter(bookmarkBlog => bookmarkBlog.id !== blogId);
    setBookmarkBlogs(remainingBookmarkBlogs);
  }
  return (
    <main className="max-w-screen-xl mx-auto">
      {/* header section */}
      <Header></Header>
      {/* horizontal line */}
      <hr className="border-2 mb-4" />
      {/* blogs and blogs menu section*/}
      <div className="flex gap-5">
        {/* blogs section */}
        <Blogs handleBookmarkBlogs={handleBookmarkBlogs} handleMarkAsReadBlogs={handleMarkAsReadBlogs}></Blogs>
        <BookmarkMenu bookmarkBlogs={bookmarkBlogs}></BookmarkMenu>
      </div>

    </main>
  )
}

export default App
