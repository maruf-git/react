import { useEffect, useState } from 'react';

const Blogs = () => {
    // setting blogs state
    const [blogs, setBlogs] = useState([]);
    // fetching and loading data
    useEffect(() => {
        fetch("blogs.json")
        .then(response => response.json())
        .then(data => console.log(data));
    }, [])

    // rendering
    return (
        <div className="w-2/3 border border-red-400">
            blogs
        </div>
    );
};

export default Blogs;