/* Ao contrario do Fragment, que puxamos apenas a propriedade
    e escrevemos as expressões no arquivo, aqui se escreve 
    a propriedade e a expressão no App.js */
const Container = ({children}) => {
    return(
        <div className="container">
            {children}
        </div>
    )
}

export default Container