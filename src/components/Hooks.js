import {useState, useEffect} from "react";

const Hooks = () => {

    let age = 30;
    const [newAge, setNewAge] = useState(age)

    const changeAge = () => {
        age = 31;
        console.log(age);
    };

    const changeNewAge = () => {
        setNewAge(45);
    };

    useEffect(() => {
        console.log("Testanto!") /* Vai aparecer "testanto" sempre que o código rodar */
    })

    return(
        <div>
            <p> Idade: {age}</p>
            <button onClick={changeAge}> Mudar idade no console </button>
            <p> Idade: {newAge}</p>
            <button onClick={changeNewAge}> Mudar idade na página </button>
        </div>
    )
}

export default Hooks;