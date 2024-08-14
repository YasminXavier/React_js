const List = () => {

    /* Lista geralmentes são puxdas de uma API ou Json*/
    const itens =[
        {
            id: 1, name: "Yasmin"
        },{
            id: 2, name: "Helena"
        },{
            id: 3, name: "Vinícius"
        }
        /* propriedade: objeto */
        /* Key -> identificação para manipulação  */
    ];

    /* Método reduce */
    const reduz = itens.reduce((soma, atual) =>
        soma + atual.id, 0
    );

    /* Método filter */
    const filtrar = itens.filter(filtro => filtro.id > 1);

    return(
        <div>
            {itens.map((item) => (/* Método Map*/
                <p key={itens.id}> {item.id} - {item.name} </p>
            ))}
            
            <p> {reduz} </p>
            {filtrar.map((filtro) => (/* Método Map*/
                <p key={filtro.id}> {filtro.name} </p>
            ))}
        </div>
    )
}



export default List;