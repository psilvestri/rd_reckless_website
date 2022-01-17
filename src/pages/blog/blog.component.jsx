import React from "react"

import BlogPost from '../../components/blog-post/blog-post.component'

import './blog.styles.scss'

const Blog = props => (
    <div className='Blog-List'>
        {props.blogs.map(blog => (
            <BlogPost key={blog.id} blog={blog} />
        ))}
    </div>
)

export default Blog