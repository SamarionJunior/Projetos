import "../../style.css"
import "./style.css"

import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Notepad = _ => {
    const [notas, setNotas] = useState([
        {id: Math.random(), title: "01", text: "02"},
        {id: Math.random(), title: "03", text: "04"},
        {id: Math.random(), title: "03", text: "04"},
        {id: Math.random(), title: "03", text: "04"},
        {id: Math.random(), title: "03", text: "04"},
        {id: Math.random(), title: "03", text: "04"},
        {id: Math.random(), title: "03", text: "04"},
        {id: Math.random(), title: "03", text: "04"},
        {id: Math.random(), title: "03", text: "04"},
        {id: Math.random(), title: "03", text: "04"},
        {id: Math.random(), title: "03", text: "04"},
        {id: Math.random(), title: "03", text: "04"},
        {id: Math.random(), title: "03", text: "04"},
        {id: Math.random(), title: "03", text: "04"},
    ])
    const updateNotas = (id, props, value, newPorps) => {
        const index = notas.findIndex(nota => nota.id === id)
        let notaIndex = notas[index]
        notaIndex[props] = value
        setNotas(oldNotas => {
            oldNotas[index] = notaIndex
            return [...oldNotas]
        })
    }
    const Insert = _ => {
        setNotas(oldNotas => [{id: Math.random(), title: "", text: ""}, ...oldNotas])
    }
    const Delete = id => {
        const index = notas.findIndex(nota => nota.id === id)
        let newNotas = [...notas]
        newNotas.splice(index, 1)
        setNotas(newNotas)
    }
    const btnPress = (e, id) => {
        const Note = document.getElementById("Note"+id)
        const InputTitle = document.getElementById("InputTitle"+id)
        const TextArea = document.getElementById("TextArea"+id)
        e.target.value = e.target.value === "Close" ? "Open" : "Close"
        if(e.target.value === "Close"){
            InputTitle.style.fontSize = "1em"
            TextArea.style.fontSize = "1em"
            Note.style.maxWidth = "calc(100% - 2em)"
            Note.style.maxHeight = "calc(100% - 2em)"
        }else{
            InputTitle.style.fontSize = "0.5em"
            TextArea.style.fontSize = "0.5em"
            Note.style.maxWidth = "calc(25% - 2em)"
            Note.style.maxHeight = "calc(10% - 2em)"
        }
    }
    useEffect(() => {
        console.log(notas)
    })
    return (
        <div id="Notepad" className="Notepad">
            <div className="NotepadContent">
                <div className="NotepadPainelOfNotes BoxShadow">
                    <input className="ButtonAdicionar" type="button" value="ADD" onClick={() => Insert()}/>
                    {notas.map(nota =>
                        <div key={nota.id} id={"Note"+nota.id} className="NotepadNotes">
                            <input className="NoteButton" type="button" value="Open" onClick={(e) => btnPress(e, nota.id)} />
                            <input className="NoteButtonClose" type="button" value="Delete" onClick={(e) => Delete(nota.id)} />
                            <input value={nota.title} id={"InputTitle"+nota.id} className="InputTitle" onChange={(e) => updateNotas(nota.id, "title", String(e.target.value), {"title": String(e.target.value)})} type="text" placeholder="Digite aqui um título!"/>
                            <textarea value={nota.text} id={"TextArea"+nota.id} className="TextArea" onChange={(e) => updateNotas(nota.id, "text", String(e.target.value), {"text": String(e.target.value)})}></textarea>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Notepad