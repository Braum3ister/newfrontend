import React from "react";
import "./boardElement.css"

const BoardElement:({listID, color}: { listID: string, color: string }) => JSX.Element
    = ({listID, color} : {listID : string, color: string}) => {
    return (
        <div className={`board-element ${color}`}/>
    )
}

export default BoardElement