import "../../style.css"
import "./style.css"

import React, { useEffect } from "react";
import { useState } from "react";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ToDo = _ => {
    console.clear()
    const [newTaskInput, setNewTaskInput] = useState("")
    const [editedText, setEditedText] = useState("")
    const [tasks, setTasks] = useState([
        {isChecked: false, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cupiditate accusantium vero, odio fugit nemo. Commodi hic rem architecto quae, sapiente perspiciatis iure quas inventore neque, tempora beatae amet aliquid.", id: Math.random()},
        {isChecked: false, name: "qwerqwrqweqwegfwqerwetwetsdtsetwertwertwertwertertwertfwertwertre", id: Math.random()},
        {isChecked: false, name: "sdfgbsdfgsdfgsdfgdgdfwiuygiufcbasgyfgwrefbgrfyhsigfysrgvfbsuifdgvysd", id: Math.random()},
        {isChecked: false, name: "sdruiwhoeiurgwheruwgerhgwuyehgweyghweoiugeghweuighwoegweugowehgu", id: Math.random()},
        {isChecked: false, name: "rwhenunwehwuhrsjhlrwjehgbgxdflngvwehrugwhergvnwergmwejghwerjgwergwergwe", id: Math.random()},
        {isChecked: false, name: "uhjrwebhgewryhgweyrghbwehgwbreywcncwyhrvnhevuerwervbkhwejrvnwekvhervjhwe", id: Math.random()},
        {isChecked: false, name: "weruiuethwegieghweyrwhgeryweeeeeeeeeehrwfgbrnhwfergrywiugryqwguehuqie", id: Math.random()},
        {isChecked: false, name: "sdruiwhoeiurgwheruwgerhgwuyehgweyghweoiugeghweuighwoegweugowehgu", id: Math.random()},
        {isChecked: false, name: "rwhenunwehwuhrsjhlrwjehgbgxdflngvwehrugwhergvnwergmwejghwerjgwergwergwe", id: Math.random()},
        {isChecked: false, name: "uhjrwebhgewryhgweyrghbwehgwbreywcncwyhrvnhevuerwervbkhwejrvnwekvhervjhwe", id: Math.random()},
        {isChecked: false, name: "weruiuethwegieghweyrwhgeryweeeeeeeeeehrwfgbrnhwfergrywiugryqwguehuqie", id: Math.random()},
        {isChecked: false, name: "sdruiwhoeiurgwheruwgerhgwuyehgweyghweoiugeghweuighwoegweugowehgu", id: Math.random()},
        {isChecked: false, name: "rwhenunwehwuhrsjhlrwjehgbgxdflngvwehrugwhergvnwergmwejghwerjgwergwergwe", id: Math.random()},
        {isChecked: false, name: "uhjrwebhgewryhgweyrghbwehgwbreywcncwyhrvnhevuerwervbkhwejrvnwekvhervjhwe", id: Math.random()},
        {isChecked: false, name: "weruiuethwegieghweyrwhgeryweeeeeeeeeehrwfgbrnhwfergrywiugryqwguehuqie", id: Math.random()},
        {isChecked: false, name: "sdruiwhoeiurgwheruwgerhgwuyehgweyghweoiugeghweuighwoegweugowehgu", id: Math.random()},
        {isChecked: false, name: "rwhenunwehwuhrsjhlrwjehgbgxdflngvwehrugwhergvnwergmwejghwerjgwergwergwe", id: Math.random()},
        {isChecked: false, name: "uhjrwebhgewryhgweyrghbwehgwbreywcncwyhrvnhevuerwervbkhwejrvnwekvhervjhwe", id: Math.random()},
        {isChecked: false, name: "weruiuethwegieghweyrwhgeryweeeeeeeeeehrwfgbrnhwfergrywiugryqwguehuqie", id: Math.random()},
        {isChecked: false, name: "sdruiwhoeiurgwheruwgerhgwuyehgweyghweoiugeghweuighwoegweugowehgu", id: Math.random()},
        {isChecked: false, name: "rwhenunwehwuhrsjhlrwjehgbgxdflngvwehrugwhergvnwergmwejghwerjgwergwergwe", id: Math.random()},
        {isChecked: false, name: "uhjrwebhgewryhgweyrghbwehgwbreywcncwyhrvnhevuerwervbkhwejrvnwekvhervjhwe", id: Math.random()},
        {isChecked: false, name: "weruiuethwegieghweyrwhgeryweeeeeeeeeehrwfgbrnhwfergrywiugryqwguehuqie", id: Math.random()},
        {isChecked: false, name: "sdruiwhoeiurgwheruwgerhgwuyehgweyghweoiugeghweuighwoegweugowehgu", id: Math.random()},
        {isChecked: false, name: "rwhenunwehwuhrsjhlrwjehgbgxdflngvwehrugwhergvnwergmwejghwerjgwergwergwe", id: Math.random()},
        {isChecked: false, name: "uhjrwebhgewryhgweyrghbwehgwbreywcncwyhrvnhevuerwervbkhwejrvnwekvhervjhwe", id: Math.random()},
        {isChecked: false, name: "weruiuethwegieghweyrwhgeryweeeeeeeeeehrwfgbrnhwfergrywiugryqwguehuqie", id: Math.random()},
        {isChecked: false, name: "sdruiwhoeiurgwheruwgerhgwuyehgweyghweoiugeghweuighwoegweugowehgu", id: Math.random()},
        {isChecked: false, name: "rwhenunwehwuhrsjhlrwjehgbgxdflngvwehrugwhergvnwergmwejghwerjgwergwergwe", id: Math.random()},
        {isChecked: false, name: "uhjrwebhgewryhgweyrghbwehgwbreywcncwyhrvnhevuerwervbkhwejrvnwekvhervjhwe", id: Math.random()},
        {isChecked: false, name: "weruiuethwegieghweyrwhgeryweeeeeeeeeehrwfgbrnhwfergrywiugryqwguehuqie", id: Math.random()},
        {isChecked: false, name: "sdruiwhoeiurgwheruwgerhgwuyehgweyghweoiugeghweuighwoegweugowehgu", id: Math.random()},
        {isChecked: false, name: "rwhenunwehwuhrsjhlrwjehgbgxdflngvwehrugwhergvnwergmwejghwerjgwergwergwe", id: Math.random()},
        {isChecked: false, name: "uhjrwebhgewryhgweyrghbwehgwbreywcncwyhrvnhevuerwervbkhwejrvnwekvhervjhwe", id: Math.random()},
        {isChecked: false, name: "weruiuethwegieghweyrwhgeryweeeeeeeeeehrwfgbrnhwfergrywiugryqwguehuqie", id: Math.random()},
        {isChecked: false, name: "sdruiwhoeiurgwheruwgerhgwuyehgweyghweoiugeghweuighwoegweugowehgu", id: Math.random()},
        {isChecked: false, name: "rwhenunwehwuhrsjhlrwjehgbgxdflngvwehrugwhergvnwergmwejghwerjgwergwergwe", id: Math.random()},
        {isChecked: false, name: "uhjrwebhgewryhgweyrghbwehgwbreywcncwyhrvnhevuerwervbkhwejrvnwekvhervjhwe", id: Math.random()},
        {isChecked: false, name: "weruiuethwegieghweyrwhgeryweeeeeeeeeehrwfgbrnhwfergrywiugryqwguehuqie", id: Math.random()},
    ])
    const setNewTask = task => {
        setTasks(oldTasks => 
            [...oldTasks, {isChecked: false, name: task, id: Math.random()}]
        )
        setNewTaskInput("")
    }
    const [dataList, setDataList] = useState(tasks)
    const [searchList, setSearchList] = useState(false)
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
    const Search = _ => {
        setSearchList(true)
        setDataList(tasks.map(task => {
            if(task.name.includes(newTaskInput)){
                return task
            }
        }))
    }
    useEffect(() => {
        if(!searchList){
            setDataList(tasks)
            console.log("setDataList")
        }
    }, [tasks, searchList])

    useEffect(() => {
        console.log(editedText)
    }, [editedText])

    const FullText = (command, id) => {
        if(command){
            document.getElementById(`LabelLock${id}`).style.whiteSpace = "normal"
            document.getElementById(`LabelUnlock${id}`).style.whiteSpace = "normal"
            document.getElementById(`Items${id}`).style.alignItems = "start"
            document.getElementById(`FullTextButtonOpen${id}`).style.display = "none"
            document.getElementById(`FullTextButtonClose${id}`).style.display = "block"
        }else{
            document.getElementById(`LabelLock${id}`).style.whiteSpace = "nowrap"
            document.getElementById(`LabelUnlock${id}`).style.whiteSpace = "nowrap"
            document.getElementById(`Items${id}`).style.alignItems = "center"
            document.getElementById(`FullTextButtonOpen${id}`).style.display = "block"
            document.getElementById(`FullTextButtonClose${id}`).style.display = "none"
        }
    }

    const UpdateText = (command, id) => {
        if(command){
            document.getElementById(`LabelLock${id}`).style.display = "none"
            document.getElementById(`LabelUnlock${id}`).style.display = "block"
            document.getElementById(`UpdateTextButtonOpen${id}`).style.display = "none"
            document.getElementById(`UpdateTextButtonClose${id}`).style.display = "block"
            
            
            tasks.forEach(task => {
                if(task.id === id){
                    setEditedText(task.name)
                }
            })
        }else{
            document.getElementById(`LabelLock${id}`).style.display = "block"
            document.getElementById(`LabelUnlock${id}`).style.display = "none"
            document.getElementById(`UpdateTextButtonOpen${id}`).style.display = "block"
            document.getElementById(`UpdateTextButtonClose${id}`).style.display = "none"
            
            setTasks(oldTasks => 
                oldTasks.map(oldTask => {
                    if(oldTask.id === id){
                        oldTask.name = editedText
                    }
                    return oldTask
                })
            )
        }
    }
    // useEffect(() => {
    //     setShow(dataList.length !== 0 ? dataList.map(task => 
    //         <div key={String(task.id)} className="Items">
    //             <input id={`check${task.id}`} name={`check${task.id}`} type="checkbox" className="CheckInput"  check={String(task.isChecked)} onChange={(e) => Check(Number(task.id))}/>
    //             <button className="ButtonCheckInput" onClick={(e => RemoveTask(Number(task.id)))}>
    //                 <FontAwesomeIcon icon="fa-caret-down" />
    //             </button>
    //             <label htmlFor={`check${task.id}`} className={task.isChecked ? "Label cortado" : "Label"}>{task.name}</label>
    //             <button className="ButtonCheckInput" onClick={(e => RemoveTask(Number(task.id)))}>
    //                 <FontAwesomeIcon icon="fa-arrows-up-down-left-right" />
    //             </button>
    //             <button className="ButtonCheckInput" onClick={(e => RemoveTask(Number(task.id)))}>
    //                 <FontAwesomeIcon icon="fa-pen" />
    //             </button>
    //             <button className="ButtonCheckInput" onClick={(e => RemoveTask(Number(task.id)))}>
    //                 <FontAwesomeIcon icon="fa-trash" />
    //             </button>
    //         </div>
    //     ) : <h1>Vazio!!!</h1>)
    // }, [dataList])
    console.log(tasks)
    return (
        <div id="ToDo" className="ToDo">
            <main className="ToDoContent">
                <section className="List">
                    <div className="Form">
                        <button className="ButtonTextInput" onClick={() => newTaskInput !== "" ? Search() : console.log("Vazio!!!")}>
                            <i className="fa-solid fa-magnifying-glass" />
                        </button>

                        {/* <button className="ButtonTextInput" onClick={() => searchList !== false ? setSearchList(false) : undefined}>
                            <i className="fa-solid fa-xmark" />
                        </button> */}

                        <input id="NewTaskInput" name="NewTaskInput" type="text" className="TextInput" placeholder="Digite uma Nova Tarefa?" value={newTaskInput} onChange={(e) => setNewTaskInput(String(e.target.value))}/>
                       
                        <button className="ButtonTextInput" onClick={() => newTaskInput !== "" ? setNewTaskInput("") : console.log("Vazio!!!")}>
                            <i className="fa-solid fa-broom"></i>
                        </button>

                        <button className="ButtonTextInput" onClick={() => newTaskInput !== "" ? setNewTask(newTaskInput) : console.log("Vazio!!!")}>
                            <i className="fa-solid fa-plus" />
                        </button>
                    </div>
                    <div className="Tasks">
                        <div className="Scroll">
                            {dataList.length !== 0 ? dataList.map(task => 
                                task !== undefined ? <div key={String(task.id)} className="Items" id={`Items${task.id}`} >
                                    <input id={`check${task.id}`} name={`check${task.id}`} type="checkbox" className="CheckInput"  check={String(task.isChecked)} onChange={(e) => Check(Number(task.id))}/>

                                    <p htmlFor={`check${task.id}`} id={`LabelLock${task.id}`} className={task.isChecked ? "Label cortado" : "Label"}>{task.name}</p>
                                    <input htmlFor={`check${task.id}`} id={`LabelUnlock${task.id}`} className="Label" style={{display: "none"}} onChange={(e) => setEditedText(String(e.target.value))} value={editedText}/>
                                    
                                    {/* <button className="ButtonCheckInput" id={`FullTextButtonOpen${task.id}`} onClick={(e => FullText(true, Number(task.id)))}>
                                        <i className="fa-solid fa-caret-down" />
                                    </button>
                                    <button className="ButtonCheckInput" id={`FullTextButtonClose${task.id}`} style={{display: "none"}} onClick={(e => FullText(false, Number(task.id)))}>
                                        <i className="fa-solid fa-caret-up" />
                                    </button>

                                    <button className="ButtonCheckInput" id={`UpdateTextButtonOpen${task.id}`}  onClick={(e => UpdateText(true, Number(task.id)))}>
                                        <i className="fa-solid fa-pen" />
                                    </button>
                                    <button className="ButtonCheckInput" id={`UpdateTextButtonClose${task.id}`}  style={{display: "none"}} onClick={(e => UpdateText(false, Number(task.id)))}>
                                        <i class="fa-solid fa-floppy-disk"></i>
                                    </button> */}

                                    <button className="ButtonCheckInput" onClick={(e => RemoveTask(Number(task.id)))}>
                                        <i className="fa-solid fa-trash" />
                                    </button>
                                </div> : undefined
                            ) : <h1>Vazio!!!</h1>}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default ToDo

{/* <button className="ButtonCheckInput" onClick={(e => RemoveTask(Number(task.id)))}>
    <i className="fa-solid fa-arrows-up-down" />
</button> */}