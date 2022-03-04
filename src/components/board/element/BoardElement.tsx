import React from "react";
import "./boardElement.css"

interface BoardProps {
    coordinate: number[]
    isPath: (x : number, y: number) => boolean
    isFound: (x : number, y: number) => number
}


const BoardElement:React.FC<BoardProps> = ({coordinate, isPath, isFound}) => {
    return (
        <div className={`board-element ${findColor(isPath(coordinate[0], coordinate[1])
            , isFound(coordinate[0], coordinate[1]))}`}/>
    )
}

const findColor = (isPath: boolean, isFound: number): string => {
    if (isPath) return "red"
    if (isFound === 0) return "white"
    return "blue"
}

export default BoardElement