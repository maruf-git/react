
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
      <hr className="text-xl border-1 mb-4" />
      {/* blog section */}
      <div className="flex gap-5">
        <Blogs></Blogs>
        <BookmarkMenu></BookmarkMenu>
      </div>

    </main>
  )
}

export default App
