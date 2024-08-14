const RenderCond = (props) => { /* ou pode se colocar ({ x }) para
                                prorpiedades únicas,e nao precisa
                                escrever props.x */
    return(
        <div>
            {props.x > 5 && <p> {props.x} é maior q 5 </p>}
            {props.x > 5 ? <p> {props.x} é maior que 5</p> : <p> {props.x} é menor que 5</p>}
            {/* expressão ?(impre algo) (if) : (else) */}
        </div>
    )
}

export default RenderCond;