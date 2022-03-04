import React from 'react';
import "./management.css"
import {DijkstraPromise} from "../../containers/pathfinding/Pathfinding";


interface ManagementProps {
    dijkstra: () => Promise<DijkstraPromise>
    setPath: (newValue: Map<string, null>) => void
    setVisited: (newValue: Map<string, number>) => void

}

const Management: React.FC<ManagementProps> = ({dijkstra, setPath, setVisited}) => {
    return (
        <div className={"task-bar container"}>
            <button className={"btn"} onClick={(e) => {
                handleDijkstra(e, dijkstra, setPath, setVisited)
            }} >
                Start-Dijkstra
            </button>
            <button className={"btn"} onClick={(e) => {
                handleClearBoard(e, () => {
                    return
                })
            }}>
                ClearBoard
            </button>
        </div>
    );
}

interface HandleDijkstraInterface {
    (
    e: { preventDefault: () => void },
    func: () => Promise<DijkstraPromise>,
    setPath: (newValue: Map<string, null>) => void,
    setVisited: (newValue: Map<string, number>) => void,
    ) : void

}

const handleDijkstra: HandleDijkstraInterface = (e, func, setPath, setVisited) => {
    e.preventDefault();
    func().then((result) => {
        console.log(result)
        setPath(new Map(Object.entries(result.path)))
        setVisited(new Map(Object.entries(result.distanceMap)))
    })

}

const handleClearBoard = (e: { preventDefault: () => void; }, func: () => void) => {
    e.preventDefault();
    func()

}

export default Management;