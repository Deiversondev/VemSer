const INITIAL_STATE = {
    auth: {
        token:'',
        auth: false,
        loading:true
        
    }
}

function AuthReducer(state = INITIAL_STATE,action){
    if (action.type === 'SET_LOGIN') {
        return {
            auth:{
                token:action.token,
                auth: action.auth,
                loading:action
            }
        }
    }
    return state;
}

export default AuthReducer