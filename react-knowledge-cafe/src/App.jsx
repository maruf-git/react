
import './App.css'
import Blogs from './components/blogs/Blogs'
import Header from './components/header/Header'

function App() {


  return (
    <main className="max-w-screen-xl mx-auto">
      <Header></Header>
      <hr className="text-xl border-1 mb-4" />

      <div className="">
        <Blogs></Blogs>
      </div>

    </main>
  )
}

export default App
