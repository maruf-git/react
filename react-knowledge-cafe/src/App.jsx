
import './App.css'
import Blogs from './components/blogs/Blogs'
import BookmarkMenu from './components/bookmark-menu/BookmarkMenu'
import Header from './components/header/Header'

function App() {


  return (
    <main className="max-w-screen-xl mx-auto">
      {/* header section */}
      <Header></Header>
      {/* horizontal line */}
      <hr className="border-2 mb-4" />
      {/* blogs and blogs menu section*/}
      <div className="flex gap-5">
        {/* blogs section */}
        <Blogs></Blogs>
        <BookmarkMenu></BookmarkMenu>
      </div>

    </main>
  )
}

export default App
