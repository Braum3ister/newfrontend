import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Board from "../../components/board/Board";
import Management from "../../components/management/Management";


Pathfinding.propTypes = {
    pathfinding: PropTypes.string
};

function Pathfinding() {
    const [colorBoard, setColor] = useState("white")
    const [startPoint, setStartPoint] = useState([1, 4])
    const [endPoint, setEndPoint] = useState([7, 2])
    const [height, setHeight] = useState(10)
    const [width, setWidth] = useState(10)
    const [walls, setWalls] = useState([])

    const changeColor = () => {
        setColor(prevState => prevState === "blue" ? "white" : "blue")
    }


    return (
        <div>
            <Management setColor={changeColor} dijkstra={() => {
                return startDijkstra({startPoint, endPoint, walls, height, width})
            }}/>
            <Board color={colorBoard} />
        </div>
    );
}

interface DijkstraProps {
    startPoint: number[]
    endPoint: number[]
    height: number
    width: number
    walls: number[][]
}

const startDijkstra = async ({startPoint, endPoint, walls, height, width}: DijkstraProps):Promise<DijkstraPromise> => {

    let response = await fetch("http://localhost:6969/api/dijkstra", {
        method: "Post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "height": height,
            "width": width,
            "startPoint": startPoint,
            "endPoint": endPoint,
            "walls": walls
        })
    })
    return response.json()

}

export interface DijkstraPromise {
    distance: number
    distanceMap: {}
    end: number[]
    start: number[]

}


export default Pathfinding;