import { useEffect, useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({HandleAddToBookMark}) => {

    const [blogs,setBlogs]=useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))

    },[])

    return (
        <div className="lg:w-2/3 w-full">
            {
                blogs.map(blog=>
                    <Blog
                     key={blog.id}
                     blog={blog} 
                     HandleAddToBookMark={HandleAddToBookMark}
                      ></Blog>
                    )
            }
            
        </div>
    );
};

Blogs.prototype={
    HandleAddToBookMark: PropTypes.func
}

export default Blogs;