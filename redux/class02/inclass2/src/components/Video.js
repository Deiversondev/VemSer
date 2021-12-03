import React from "react" 
import { connect } from "react-redux"   

const Video = ({activeLesson,activeModule}) => {
    return (
        <div>
            <p><strong>Módulo: {activeModule.title} </strong></p>
            <p><strong>Aula: {activeLesson.title}</strong></p>
        </div>
    )
}

export default connect(state => ({
    activeModule: state.videoReducer.activeModule,
    activeLesson: state.videoReducer.activeLesson
})) (Video)
