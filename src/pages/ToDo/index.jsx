import "../../style.css"
import "./style.css"

import React from "react";
import { useState } from "react";

const ToDo = _ => {
    console.clear()
    const [newTaskInput, setNewTaskInput] = useState("")
    const [tasks, setTasks] = useState([])
    const setNewTask = task => {
        setTasks(oldTasks => 
            [...oldTasks, {isChecked: false, name: task, id: Math.random()}]
        )
        setNewTaskInput("")
    }
    const Check = id => setTasks(tasks.map(task => {
        if(task.id === id){
            task.isChecked = !task.isChecked
        }
        return task
    }))
    const RemoveTask = id => setTasks(tasks.filter(task => {
        if(task.id === id){
            return false
        }
        return true
    }))
    console.log(tasks)
    return (
        <div id="ToDo" className="ToDo">
            <div className="ToDoContent">
                <div className="Form">
                    <input id="NewTaskInput" name="NewTaskInput" type="text" className="TextInput" placeholder="Digite uma Nova Tarefa?" value={newTaskInput} onChange={(e) => setNewTaskInput(String(e.target.value))}/>
                    <button className="ButtonTextInput" onClick={() => newTaskInput !== "" ? setNewTask(newTaskInput) : console.log("Vazio!!!")}>Adicionar</button>
                </div>
                <div className="Tasks">
                    {tasks.length !== 0 ? tasks.map(task => 
                        <div key={String(task.id)}>
                            <input 
                                id={`check${task.id}`}
                                name={`check${task.id}`}
                                type="checkbox"
                                className="CheckInput" 
                                check={String(task.isChecked)}
                                onChange={(e) => Check(Number(task.id))}
                            />
                            <label htmlFor={`check${task.id}`} className={task.isChecked ? "cortado" : ""}>{task.name}</label>
                            <button className="ButtonCheckInput" onClick={(e => RemoveTask(Number(task.id)))}>Remover</button>
                        </div>
                    ) : 
                        <h1>Vazio!!!</h1>
                    }
                </div>
            </div>
        </div>
    )
}

export default ToDo