import { useEffect, useState } from 'react';
import Blog from '../blog/Blog';

const Blogs = () => {
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
        <div className="w-2/3 border border-red-400">
            <h1>total blogs:{blogs.length}</h1>
            {
                blogs.map(blog=><Blog key={blog.id} blog={blog}></Blog>)
            }
            
        </div>
    );
};

export default Blogs;