import React from "react";
import {connect} from 'react-redux'
import * as VideosActions from '../store/actions/video'
import { bindActionCreators } from "redux";

const Sidebar = ({modules,handleLesson}) => {
    
    return (
        <aside>
            {modules.map(module => (
               <div key={module.id}>
                    <h2>{module.title}</h2>
                    <ul>
                        {module.lessons.map(lesson => (
                            <li>{lesson.title} <button onClick={() => handleLesson(module,lesson)}>Click me</button> </li>
                        ))}
                    </ul>
               </div>
            ))}
        </aside>
    )
}

const mapStateToProps = state =>({
    modules:state.videoReducer.modules
})

const mapDispatchToProps = dispatch => (
    bindActionCreators(VideosActions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
