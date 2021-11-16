function OutraList({itens}) {
    return (
        <div>
            <h3>Lista de Tecnologias</h3>
            { itens.length ? ( itens.map(item => (
                <div key={item.id}>
                    <p>Nome: {item.nome} || Idade: {item.idade}</p>
                </div>
            ))) : (<h1>Lista vazia</h1>)}

        </div>
    )
}

export default OutraList
