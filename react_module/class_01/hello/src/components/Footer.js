

const Footer = ({Link}) => {
    return (
        <div>
        <ul>
          <l1> 
            <Link to="/">Home</Link> 
          </l1>
          
          <l1> 
            <Link to="/empresa">Empresa</Link> 
          </l1>

          <l1>
             <Link to="/contato">Contato</Link>
          </l1> 
        </ul>  
        </div>
    )
}

export default Footer
