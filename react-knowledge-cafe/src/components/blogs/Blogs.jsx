import { useEffect, useState } from 'react';
import Blog from '../blog/Blog';

const Blogs = ({handleBookmarkBlogs,handleMarkAsReadBlogs}) => {
    // setting blogs state
    const [blogs, setBlogs] = useState([]);
    // fetching and loading data
    useEffect(() => {
        fetch("blogs.json")
        .then(response => response.json())
        .then(data => setBlogs(data));
    }, [])

    // rendering
    return (
        <div className="w-2/3">
            {
                blogs.map(blog=><Blog key={blog.id} blog={blog} handleBookmarkBlogs={handleBookmarkBlogs} handleMarkAsReadBlogs={handleMarkAsReadBlogs}></Blog>)
            }
            
        </div>
    );
};

export default Blogs;