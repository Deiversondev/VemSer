import React from 'react'
import { connect } from 'react-redux'

const Video = ({activeLesson,activeModule}) => {
    return (
        <div>
            <h1>Video</h1>
            <p><strong>Módulo </strong> {activeModule.title}</p>
            <p><strong>Class </strong> {activeLesson.title}</p> 
        </div>
    )
}

export default connect(state => ({
    activeModule:state.activeModule,
    activeLesson:state.activeLesson
}))(Video)
