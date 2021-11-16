import Item from './Item'

function List() {
    return (
      <>
        <h1>Minha Lista</h1>
        <ul>
            <Item/>
            <Item menu="Sobre" />
            <Item menu="Contato" url={30} />
        </ul>
      </>
    );
  }
  

  

export default List;