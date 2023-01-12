import "../../../style.css"
import "./style.css"

import React from "react";

const Form = _ => {
    return (
        <div className="Form">
            <input id="NewTaskInput" name="NewTaskInput" type="text" className="TextInput" placeholder="Digite uma Nova Tarefa?" value={newTaskInput} onChange={(e) => setNewTaskInput(String(e.target.value))}/>
            <button className="ButtonTextInput" onClick={() => newTaskInput !== "" ? setNewTask(newTaskInput) : console.log("Vazio!!!")}>Adicionar</button>
        </div>
    )
}

export default Form