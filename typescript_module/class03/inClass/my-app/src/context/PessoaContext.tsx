import React, {createContext,ReactNode,useState} from "react"
import { PessoaDTO } from "../model/PessoaDTO"

interface IPessoaContext{
  list:Array<PessoaDTO>;
  setList:React.Dispatch<React.SetStateAction<Array<PessoaDTO>>>
  userEdit:PessoaDTO;
  setUserEdit:React.Dispatch<React.SetStateAction<PessoaDTO>>;
}

const PessoaContext = createContext<IPessoaContext>({} as IPessoaContext);

const PessoaProvider : React.FC<ReactNode> = ({children}) =>{
  const [list,setList] = useState<Array<PessoaDTO>>([])
  const [userEdit,setUserEdit] = useState({} as PessoaDTO)
  
  return(
    <PessoaContext.Provider value={{list,setList,userEdit,setUserEdit}}>
      {children}
    </PessoaContext.Provider>
  )
}

export {PessoaContext,PessoaProvider}



