import React from 'react'
import PropTypes from 'prop-types'

const BookmarkMenu = ({bookmarkBlogs}) => {
    console.log("bookmarked:",bookmarkBlogs);
  return (
    <div className="w-1/3">
      {/* reading time section */}
      <div className="py-8 text-center border border-blue-500 rounded-md mb-8">
        <p>Spend time on reading: </p>
      </div>
      {/* bookmark list section */}
      <div className="border border-blue-500 rounded-md px-4 py-6">
        <div className="mb-4">
            <h3> Bookmarked Blogs: {bookmarkBlogs.length}</h3>
        </div>
        {/* bookmarked list */}
        <div className="flex flex-col gap-4">
            {/* bookmark */}
            {
                bookmarkBlogs.map((bookmarkBlog,idx)=><div key={idx}>{bookmarkBlog.title}</div>)
            }
        </div>
      </div>
    </div>
  )
}

BookmarkMenu.propTypes = {

}

export default BookmarkMenu
