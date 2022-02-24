import React from 'react';
import "./App.css"
import {Footer, Header, Pathfinding} from "./containers";


function App() {
    return (
        <div className="App">
            <Header heading={"This is a heading"}/>
            <Pathfinding pathfinding={"This is a Pathfinding module"}/>
            <Footer name={"This is footer"}/>
        </div>

    );
}

export default App;
