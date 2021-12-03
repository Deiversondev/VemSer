import React,{useState} from 'react'
import { connect } from 'react-redux'

const Sidebar = ({modules,dispatch}) => {

    function handleLesson (module,lesson){
        return {
            type:'SET_LESSON',
            module,
            lesson
        }
    }

    return (
      <aside>
          {modules.map(module =>{
              return (
                  <div key={module.id}>
                      <strong>{module.title}</strong>
                      <ul>
                          {module.lessons.map(lesson => {
                              return (
                                  <li key={lesson.id}>{lesson.title} <button onClick={() => {
                                      dispatch(handleLesson(module,lesson))
                                  }}>Click me</button> </li>
                              )
                          })}
                      </ul>
                  </div>
              )
          })}
      </aside>
    )
}

export default connect(state => ({modules:state.modules}))(Sidebar);
