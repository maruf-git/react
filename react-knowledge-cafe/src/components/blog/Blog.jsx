import React from 'react'
import PropTypes from 'prop-types'

const Blog = ({ blog }) => {
    const { id, cover_img, title, author, author_img, post_date, reading_time, hashtags } = blog;
   
    return (
        <div>
            <div>
                <img src={cover_img} alt="" />
            </div>
        </div>
    )
}

Blog.propTypes = {

}

export default Blog
