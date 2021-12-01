import{createStore} from 'redux'

const INITIAL_STATE = {
    activeLesson :{},
    activeModule :{},


    modules: [
        {id:1, title:'Starting out with react', 
        lessons: [
            {id:1,title:'First React Video'},
            {id:2,title:'Second React Video'},
            {id:3,title:'Third React Video'}
        ]},
        {id:2,title:'Starting with redux', lessons:[
            {id:3,title:'First Redux Video'},
            {id:4,title:'Second Redux Video'}
        ]}
    ]
    
   
}

function reducer(state = INITIAL_STATE , action){
    if(action.type === 'SET_LESSON'){
        return {
            ...state,
            activeLesson:action.lesson,
            activeModule:action.module

        }
    }
    return state
}

const store = createStore(reducer)

export default store;