import React from "react"

import './blog-post.styles.scss'

const BlogPost = props => (
    <div className='blog-post'>
        <h1>A BLOG POST</h1>
        <h2> {props.post.id}</h2>
        {console.log("made it to the blog posts")}
    </div>
)

export default BlogPost