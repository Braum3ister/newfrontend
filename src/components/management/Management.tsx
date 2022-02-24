import React from 'react';
import "./management.css"
import {DijkstraPromise} from "../../containers/pathfinding/Pathfinding";


interface ManagementProps {
    setColor: React.DispatchWithoutAction
    dijkstra: () => Promise<DijkstraPromise>
}

const Management: React.FC<ManagementProps> = ({setColor, dijkstra}) => {
    return (
        <div className={"task-bar container"}>
            <button className={"btn"} onClick={(e) => {
                handleDijkstra(e, dijkstra)
            }} >
                Start-Dijkstra
            </button>
            <button className={"btn"} onClick={(e) => {
                handleClearBoard(e, setColor)
            }}>
                ClearBoard
            </button>
        </div>
    );
}

const handleDijkstra = (e: { preventDefault: () => void }, func: () => Promise<DijkstraPromise>) => {
    e.preventDefault();
    func().then((result) => {
        console.log(result.distance)
    })

}

const handleClearBoard = (e: { preventDefault: () => void; }, func: () => void) => {
    e.preventDefault();
    func()

}

export default Management;