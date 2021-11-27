import React, {createContext,ReactNode,useState} from "react"
import { PessoaDTO } from "../model/PessoaDTO"

interface IPessoaContext{
  list:Array<PessoaDTO>;
  setList:React.Dispatch<React.SetStateAction<Array<PessoaDTO>>>
  edit:boolean,
  setEdit:(value:boolean) => void;
  userEdit:PessoaDTO;
  setUserEdit:React.Dispatch<React.SetStateAction<PessoaDTO>>;
}

const PessoaContext = createContext<IPessoaContext>({} as IPessoaContext);

const PessoaProvider : React.FC<ReactNode> = ({children}) =>{
  const [list,setList] = useState<Array<PessoaDTO>>([])
  const [edit,setEdit] = useState(true);
  const [userEdit,setUserEdit] = useState({} as PessoaDTO)
  
  return(
    <PessoaContext.Provider value={{list,setList,edit,setEdit,userEdit,setUserEdit}}>
      {children}
    </PessoaContext.Provider>
  )
}

export {PessoaContext,PessoaProvider}



