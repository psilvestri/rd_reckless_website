import React, { Component } from 'react'
import ReactPlayer from 'react-player'

import './main-stream-player.styles.scss'

class MainStreamPlayer extends Component {
    render() {
        return(
            <div className='MainStreamPlayer'>
                <div className='VideoPlayer'>
                <ReactPlayer url='https://www.twitch.tv/rd_reckless' 
                    playing={true}
                    volume={.5}
                    muted={true}
                    width={800}
                />
                </div>
            </div>
        )
    }
}

export default MainStreamPlayer