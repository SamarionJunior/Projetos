import "../../style.css"
import "./style.css"

import React from "react";
import { useState } from "react";

const ToDo = _ => {
    console.clear()
    const [newTaskInput, setNewTaskInput] = useState("")
    const [tasks, setTasks] = useState([
        {isChecked: false, name: "fdsghsdfgsfgfgsfgsdfgsdfgsdfgsdfgs", id: Math.random()},
        {isChecked: false, name: "b", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
    ])
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
            <main className="ToDoContent">
                <section className="List">
                    <div className="Form">
                        <input id="NewTaskInput" name="NewTaskInput" type="text" className="TextInput" placeholder="Digite uma Nova Tarefa?" value={newTaskInput} onChange={(e) => setNewTaskInput(String(e.target.value))}/>
                        <button className="ButtonTextInput" onClick={() => newTaskInput !== "" ? setNewTask(newTaskInput) : console.log("Vazio!!!")}>A</button>
                    </div>
                    <div className="Tasks">
                        {tasks.length !== 0 ? tasks.map(task => 
                            <div key={String(task.id)} className="Items">
                                <label className="containerCheckBox">
                                    <input id={`check${task.id}`} name={`check${task.id}`} type="checkbox" className="CheckInput"  check={String(task.isChecked)} onChange={(e) => Check(Number(task.id))}/>
                                    <span className="spanChackBox"></span>
                                </label>
                                <label htmlFor={`check${task.id}`} className={task.isChecked ? "Label cortado" : "Label"}>{task.name}</label>
                                <button className="ButtonCheckInput" onClick={(e => RemoveTask(Number(task.id)))}>R</button>
                            </div>
                        ) : 
                            <h1>Vazio!!!</h1>
                        }
                    </div>
                </section>
            </main>
        </div>
    )
}

export default ToDo