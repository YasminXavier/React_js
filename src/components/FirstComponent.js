import AnotherComponent from "./AnotherComponent";
import Hooks from "./Hooks";
import Images from "./Images";
import List from "./List"

/* Componentes podem ser usados dentro de outros componentes */
function FirstComponent() {

    const nome = "Luiz";

    return(/* dentro do return (função em js) escreve a yela em html */
      /* não posso ter dois "pais" */  
      <div className="FistComponent">
        <p> Primeiro componente</p>
        <AnotherComponent/>
        {/* chave é usada para  comando em jsx */}
        <p> Nome: {nome}</p>
        <Hooks/>
        <p/>
        <Images/>
        <p/>
        <List/>
      </div>
    )

}

export default FirstComponent //exporta esse componente para ser usado em outro lugar
