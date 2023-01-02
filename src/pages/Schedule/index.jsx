import "../../style.css"
import "./style.css"

import React from "react";
import { useState } from "react";

const Schedule = _ => {
    const [dias, setDias] = useState(
        [
            {id: String(Math.random()), numero: 1, eventos: [
                {id: String(Math.random()), horarioDeInicio: "01:00", horarioDeEncerramento: "02:00", nome: "Evento 01"},
                {id: String(Math.random()), horarioDeInicio: "02:00", horarioDeEncerramento: "03:00", nome: "Evento 02"},
                {id: String(Math.random()), horarioDeInicio: "03:00", horarioDeEncerramento: "04:00", nome: "Evento 03"},
            ]},
        ]
    )
    return (
        <div id="Schedule" className="Schedule">
            <div className="ScheduleContent">
                {dias.map(dia => 
                    <div key={dia.id} className="Day">
                        {dia.eventos.map(evento => 
                            <div key={evento.id} className="Event">
                                <input type="time" className="Hour" value={evento.horarioDeInicio} onChange={(e) => console.log(String(e.target.value))}/>
                                <input type="time" className="Hour" value={evento.horarioDeEncerramento} onChange={(e) => console.log(String(e.target.value))}/>
                                <input type="text" className="EventText" value={evento.nome} onChange={(e) => console.log(String(e.target.value))}/>
                                <button className="EventDelete">
                                    Delete
                                </button>
                            </div>
                        )}
                        <div className="Input">
                            <input type="time" className="InputHour"/>
                            <input type="time" className="InputHour"/>
                            <input type="text" className="InputText" placeholder="Digite um Novo Evento!!!" />
                            <input type="button" className="InputButton" value="Save" />
                            <input type="button" className="InputButton" value="Clear "/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Schedule