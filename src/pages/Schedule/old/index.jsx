import "../../style.css"
import "./style.css"

import React from "react";
import { useState } from "react";

const Schedule = _ => {
    const [meses, setMeses] = useState([1,2,3,4,5,6,7,8,9,10,11,12])
    const [dias, setDias] = useState(
        [1,2,3,4,5,6,7,8,9,10,
        11,12,13,14,15,16,17,18,19,20,
        21,22,23,24,25,26,27,28,29,30]
    )
    return (
        <div id="Schedule" className="Schedule">
            <div className="ScheduleContent">
                {meses.map(mes => 
                    <div key={mes} className="Meses">
                        {dias.map(dia => 
                            <div key={dia} className="Dias">
                                <span className="TextDay">{dia}</span>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Schedule