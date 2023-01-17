import "../../style.css"
import "./style.css"

import React from "react";
import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ToDo = _ => {
    console.clear()
    const [newTaskInput, setNewTaskInput] = useState("")
    const [tasks, setTasks] = useState([
        {isChecked: false, name: "fdsghsdfgsfgfgsfg344535234525634636456345635sdfgsdfgsdfgsdfgs", id: Math.random()},
        {isChecked: false, name: "b", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
        // {isChecked: false, name: "c", id: Math.random()},
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
                <section className="List BoxShadow">
                    <div className="Form">
                        <input id="NewTaskInput" name="NewTaskInput" type="text" className="TextInput" placeholder="Digite uma Nova Tarefa?" value={newTaskInput} onChange={(e) => setNewTaskInput(String(e.target.value))}/>
                        <button className="ButtonTextInput" onClick={() => newTaskInput !== "" ? setNewTask(newTaskInput) : console.log("Vazio!!!")}>
                            <FontAwesomeIcon icon="fa-plus" />
                        </button>
                    </div>
                    <div className="Tasks">
                        <div className="Scroll">
                            {tasks.length !== 0 ? tasks.map(task => 
                                <div key={String(task.id)} className="Items">
                                    <input id={`check${task.id}`} name={`check${task.id}`} type="checkbox" className="CheckInput"  check={String(task.isChecked)} onChange={(e) => Check(Number(task.id))}/>
                                    <label htmlFor={`check${task.id}`} className={task.isChecked ? "Label cortado" : "Label"}>{task.name}</label>
                                    <button className="ButtonCheckInput" onClick={(e => RemoveTask(Number(task.id)))}>
                                        <FontAwesomeIcon icon="fa-trash" />
                                    </button>
                                </div>
                            ) : 
                                <h1>Vazio!!!</h1>
                            }
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default ToDo