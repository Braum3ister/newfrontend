import React from "react";
import BoardElement from "./element/BoardElement";
import "./board.css"

export interface BoardProps {
    color : string;
    startPoint: number[]
    endPoint: number[]
}


const Board = ({color} : {color : string }) => {
    let height = 10
    let width = 10

    return (
        <div className="board">
            {createBoard(height, width, color)}
        </div>
    )
}

const createBoard = (height: number, width: number, color:string) => {
    let output = []
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            output.push(<BoardElement color={color} key={`${i}${j}`} listID={`${i},${j}`}/>)
        }
    }
    return output;
}

export default Board;