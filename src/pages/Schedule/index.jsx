import "../../style.css"
import "./style.css"

import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Schedule = _ => {
    const [horarioDeInicio, setHorarioDeInicio] = useState("")
    const [horarioDeEncerramento, setHorarioDeEncerramento] = useState("")
    const [nome, setNome] = useState("")
    const [eventos, setEventos] = useState(
        {id: String(Math.random()), numero: 1, eventos: [
            {id: String(Math.random()), horarioDeInicio: "01:00", horarioDeEncerramento: "02:00", nome: "Evento 01"},
            {id: String(Math.random()), horarioDeInicio: "02:00", horarioDeEncerramento: "03:00", nome: "Evento 02"},
            {id: String(Math.random()), horarioDeInicio: "03:00", horarioDeEncerramento: "04:00", nome: "Evento 03"},
        ]}
    )
    const [eventoBase, setEventoBase] = useState({id: undefined, horarioDeInicio: undefined, horarioDeEncerramento: undefined, nome: undefined})
    const Insert = _ => {
        let newEventos = [...eventos.eventos]
        let newEventoBase = {id: String(Math.random()), horarioDeInicio: horarioDeInicio, horarioDeEncerramento: horarioDeEncerramento, nome: nome}
        newEventos.push(newEventoBase)
        setEventos(oldEventos => ({...oldEventos, eventos: [...newEventos]}))
    }
    const Clear = _ => {
        setHorarioDeInicio("")
        setHorarioDeEncerramento("")
        setNome("")
    }
    const Delete = id => {
        let newEventos = [...eventos.eventos]
        const index = newEventos.findIndex(evento => evento.id === id)
        newEventos.splice(index, 1)
        console.log(newEventos)
        setEventos(oldEventos => ({...oldEventos, eventos: [...newEventos]}))
    }
    
    const Update = (id, newProps) => {
        let newEventos = [...eventos.eventos]
        const index = newEventos.findIndex(evento => evento.id === id)
        newEventos[index] = {...newEventos[index], ...newProps}
        setEventos(oldEventos => ({...oldEventos, eventos: [...newEventos]}))
    }
    useEffect(() => {
        console.log(eventos.eventos)
    }, [eventos])
    return (
        <div id="Schedule" className="Schedule">
            <div className="ScheduleContent">
                <div className="ScheduleDay BoxShadow">
                    <div className="ScheduleFrom">
                        <input type="time" className="ScheduleInputHour" value={horarioDeInicio} onChange={(e) => setHorarioDeInicio(String(e.target.value))}/>
                        <input type="time" className="ScheduleInputHour" value={horarioDeEncerramento} onChange={(e) => setHorarioDeEncerramento(String(e.target.value))}/>
                        <input type="text" className="ScheduleTextInput" value={nome} onChange={(e) => setNome(String(e.target.value))} placeholder="Digite um Novo Evento!!!" />
                        <button type="button" className="ScheduleButtonTextInput" value="Clear" onClick={() => Clear()}>
                            <FontAwesomeIcon icon="fa-xmark" />
                        </button>
                        <button type="button" className="ScheduleButtonTextInput" value="Clear" onClick={() => Insert()}>
                            <FontAwesomeIcon icon="fa-floppy-disk" />
                        </button>
                    </div>
                    <div className="ScheduleEvents">
                        <div className="ScheduleScroll">
                            {eventos.eventos.map(evento => 
                                <div key={evento.id} className="ScheduleEvent">
                                    <input type="time" className="Hour" value={evento.horarioDeInicio} onChange={(e) => Update(evento.id, {"horarioDeInicio": String(e.target.value)})}/>
                                    <input type="time" className="Hour" value={evento.horarioDeEncerramento} onChange={(e) => Update(evento.id, {"horarioDeEncerramento": String(e.target.value)})}/>
                                    <input type="text" className="ScheduleLabel" value={evento.nome} onChange={(e) => Update(evento.id, {"nome": String(e.target.value)})}/>
                                    <button className="ScheduleButtonCheckInput" onClick={() => Delete(evento.id)}>
                                        <FontAwesomeIcon icon="fa-trash" />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schedule