import React from "react";
import './Meets.css'
// import { Link } from "react-router-dom";
import Cal from "./Calender";

function Meets() {

    return(
        <>
            <div className="meets">
                <p>History</p>
           
            <div >
                <button className="toggleOption">Meet</button>
                <button className="toggleOption">Prescriptions</button>
            </div>
            <div className="outline">
                <Cal/>
                <button className="toggleOption2">Pending</button>
                <button className="toggleOption2">Completed</button>
                </div>
            </div>
        </>
    )
}

export default Meets;