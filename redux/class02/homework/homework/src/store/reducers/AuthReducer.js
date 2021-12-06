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
    else {
        return {auth:{INITIAL_STATE}}
    }
    // return state;
}

export default AuthReducer