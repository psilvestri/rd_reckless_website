import React from 'react'

import BlogPost from '../blog-post/blog-post.component'

import './blog-samples.styles.scss'

const BlogSamples = props => (
    <div className='blog-samples'>
        <h1> TEST </h1>
        {props.posts.map(post => (
            <BlogPost key={post.posts.id} post={post}/>
        ))}
        {console.log("here is the post id:")}
        {console.log(props.posts.id)}
        {console.log("that was the post id.")}

    </div>
)

export default BlogSamples