const INITIAL_STATE = {
    activeLesson:{},
    activeModule:{},

    modules: [
        {id:1, title:'React Module', 
        lessons:[
        {id:1, title:'Aula React 1'},
        {id:2, title:'Aula React 2'},
        {id:3, title:'Aula React 3'}
    ]},

    {id:1,title:'Redux', lessons:[
        {id:4, title:'Aula Redux 1'},
        {id:5, title:'Aula Redux 2'},
        {id:6, title:'Aula Redux 3'}
    ]}

    ]
}

const videoReducer = (state= INITIAL_STATE,action) =>{

    if (action.type === 'SET_LESSON') {
        return {
            ...state,
            activeLesson: action.lesson,
            activeModule:action.module
        }
    }
    return (
       state
    )
}

export default videoReducer;