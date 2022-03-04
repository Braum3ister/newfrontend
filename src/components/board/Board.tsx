import React from "react";
import BoardElement from "./element/BoardElement";
import "./board.css"

export interface BoardProps {
    color? : string;
    startPoint?: number[]
    endPoint?: number[]
    path: Map<string, null>
    found: Map<string, number>
}


const Board: React.FC<BoardProps> = ({path, found}) => {
    let height = 10
    let width = 10

    const isPath = (x: number, y: number) => {
        let stringToCheck = `${x},${y}`
        return path.has(stringToCheck)
    }

    const isFound = (x: number, y: number) => {
        let stringToCheck = `${x},${y}`
        let output = found.get(stringToCheck)
        if (output === undefined) return 0
        return output
    }

    return (
        <div className="board">
            {createBoard(height, width, isPath, isFound)}
        </div>
    )
}

const createBoard = (height: number, width: number
                     , isPath: (x: number, y: number) => boolean, isFound: (x: number, y: number) => number) => {
    let output = []
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            output.push(<BoardElement coordinate={[i, j]} key={`${i}${j}`} isPath={isPath} isFound={isFound}/>)
        }
    }
    return output;
}



export default Board;