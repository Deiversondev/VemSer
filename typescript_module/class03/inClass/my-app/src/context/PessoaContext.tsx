import React, {createContext,ReactNode,useState} from "react"
import { PessoaDTO } from "../model/PessoaDTO"
import {newsDTO} from '../model/PessoaDTO'

interface IPessoaContext{
  list:Array<PessoaDTO>;
  setList:React.Dispatch<React.SetStateAction<Array<PessoaDTO>>>
  userEdit:PessoaDTO;
  setUserEdit:React.Dispatch<React.SetStateAction<PessoaDTO>>;
  news:Array<newsDTO>;
  setNews:React.Dispatch<React.SetStateAction<Array<newsDTO>>>
  loading: boolean;
  setLoading:(value: boolean) => void;
  
}

const PessoaContext = createContext<IPessoaContext>({} as IPessoaContext);

const PessoaProvider : React.FC<ReactNode> = ({children}) =>{
  const [list,setList] = useState<Array<PessoaDTO>>([])
  const [userEdit,setUserEdit] = useState({} as PessoaDTO)
  const [news,setNews] = useState<Array<newsDTO>>([])
  const [loading,setLoading] = useState(true);
 
  
  
  return(
    <PessoaContext.Provider value={{list,setList,userEdit,setUserEdit, news,setNews,loading,setLoading}}>
      {children}
    </PessoaContext.Provider>
  )
}

export {PessoaContext,PessoaProvider}



