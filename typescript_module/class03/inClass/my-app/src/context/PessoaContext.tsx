import React, {createContext,ReactNode,useState} from "react"
import { PessoaDTO } from "../model/PessoaDTO"

interface IPessoaContext{
  list:PessoaDTO['pessoas'];
  setList:React.Dispatch<React.SetStateAction<PessoaDTO['pessoas']>>
}

const PessoaContext = createContext<IPessoaContext>({} as IPessoaContext);

const PessoaProvider : React.FC<any> = ({children}) =>{
  const [list,setList] = useState<PessoaDTO['pessoas']>([])
  
  return(
    <PessoaContext.Provider value={{list,setList}}>
      {children}
    </PessoaContext.Provider>
  )
}

export {PessoaContext,PessoaProvider}



