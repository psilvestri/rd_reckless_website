import React, { Component } from 'react'

import MainStreamPlayer from '../../components/main-stream-player/main-stream-player.component';

import './home.styles.scss'

class Home extends Component {
    render() {
        return (
            <div className='HomeContent'>
                <h1>It's ya boy</h1>
                <h2>Bry Bry the shy guy</h2>

                <MainStreamPlayer />
                <div className='Left'>
                    What's up guys, my name is Brain.  Most people know me as RD_Reckless.  I am a Twitch streamer and I have big stinky toots.
                </div>
            </div>
        )
    }
}
  
  export default Home