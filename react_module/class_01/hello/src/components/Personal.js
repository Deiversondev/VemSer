function Personal({name , age, profissao, src}){
    return (
        <div>
            <h3>Nome: {name} </h3>
            <p>Idade: {age}</p>
            <p>Profissão: {profissao}</p>
            <img src={src} alt="" />
        </div>
    )
}

export default Personal;