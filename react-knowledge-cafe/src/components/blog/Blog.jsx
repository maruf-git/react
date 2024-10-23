import React from 'react'
import PropTypes from 'prop-types'
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({ blog,handleBookmarkBlogs,handleMarkAsReadBlogs }) => {
    const { id, cover_img, title, author, author_img, post_date, reading_time, hashtags } = blog;
    console.log("hashtags:",hashtags);
    return (
        <div className="mb-8">
            {/* cover image */}
            <div>
                <img src={cover_img} alt="" />
            </div>
            {/* author and bookmark section */}
            <div className="flex justify-between items-center my-4">
                {/* author */}
                <div className="flex justify-center  items-center gap-4">
                    <div className="w-16">
                        <img src={author_img} alt="" />
                    </div>
                    <div>
                        <h3>{author}</h3>
                        <p>{post_date}</p>
                    </div>
                </div>
                {/* bookmark */}
                <div className="flex justify-center items-center gap-2">
                    <p>{reading_time} minute read</p>
                    <button onClick={()=>handleBookmarkBlogs(blog)}> <FaRegBookmark /></button>
                </div>
            </div>
            {/* title and description section */}
            <div className="flex flex-col gap-2 mb-8">
                <h1 className="text-5xl font-bold ">{title}</h1>
                {/* hashtags */}
                <div className="flex flex-wrap gap-1">
                    {
                        hashtags.map((hashtag,idx)=>
                        <p key={idx}>{hashtag}</p>
                    )
                    }
                </div>
                {/* mark as read button */}
                <div>
                    <button onClick={()=>handleMarkAsReadBlogs(id)} className="text-blue-600 border-b-2 border-blue-600">Mark as read</button>
                </div>
            </div>
            <hr className="border-2" />
        </div >
    )
}

Blog.propTypes = {

}

export default Blog
