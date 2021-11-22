import {useContext, useEffect} from 'react';
import { Context } from '../context/AuthContext'

function Login() {

  const {authenticated,handleLogin} = useContext(Context);
  useEffect(() =>{
    
  })

  return (
    <div>
      <button onClick={handleLogin}>Ativar</button>
    </div>
  )
}

export default Login;