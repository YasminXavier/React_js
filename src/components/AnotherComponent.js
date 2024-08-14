
/* Criar um componente com "const ... = () =>(...)
    NÃO precisa escrever o "return" */
/* Nesse formato de componente, as novas constantes que serão criadas
    precisam NÃO estar dentro do componente pai */

import ThirdComponent from "./ThirdComponent";

const handleClique = () => (
    console.log("Clicou no botão")
);
const AnotherComponent = () => (


    <div>
        <p> Segundo componente </p>
        <ThirdComponent/>
        <p> Usada para funções mais densas: </p>
        <button onClick={handleClique}> Função fora do botão</button>
        <p/>
        <p> Usada para funções mais simples:</p>
        <button onClick={() => console.log("teste")}>Função dentro do botão</button>
    </div>

)

export default AnotherComponent;