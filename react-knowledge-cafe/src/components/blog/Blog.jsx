import React from 'react'
import PropTypes from 'prop-types'
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({ blog }) => {
    const { id, cover_img, title, author, author_img, post_date, reading_time, hashtags } = blog;

    return (
        <div>
            {/* cover image */}
            <div>
                <img src={cover_img} alt="" />
            </div>
            {/* author and bookmark section */}
            <div>

                <div className="flex justify-between items-center">
                    {/* author */}
                    <div className="flex justify-center  items-center gap-4">
                        <div className="w-14">
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
                        <button> <FaRegBookmark /></button>
                    </div>
                </div>

            </div>
        </div>
    )
}

Blog.propTypes = {

}

export default Blog
