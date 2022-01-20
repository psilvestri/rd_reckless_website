import React, { Component } from 'react'
import axios from 'axios'

import BlogSamples from '../../components/blog-samples/blog-samples.component'
import MainStreamPlayer from '../../components/main-stream-player/main-stream-player.component'

import './home-page.styles.scss'

class HomePage extends Component {
    constructor() {
        super()

        this.state = {
            blogData: [],
            dataIsLoaded: false 
        }
    }

    componentDidMount() {
        axios.get("https://demo.ghost.io/ghost/api/v3/content/posts/?key=22444f78447824223cefc48062")
            .then(function (blogData) {
                console.log(blogData.data)
            }
        )}

    render() {
        const { blogData } = this.state

        return (
            <div className='home-page'>
                <h1>It's ya boy</h1>
                <h2>Bry Bry the shy guy</h2>

                <MainStreamPlayer />
                <div className='left'>
                    What's up guys, my name is Brain.  Most people know me as RD_Reckless.  I am a Twitch streamer and I have big stinky toots.
                </div>

                <BlogSamples posts = {blogData}/>
                
                <div className='right'>
                    What's up guys, my name is Brain.  Most people know me as RD_Reckless.  I am a Twitch streamer and I have big stinky toots.
                </div>
            </div>
        )
    }
}
  
  export default HomePage