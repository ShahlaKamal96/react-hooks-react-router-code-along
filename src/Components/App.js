import React from 'react'
import { Route, Switch } from "react-router-dom";
import NavBar from './NavBar';
import About from './About';
import Login from './Login';
import Home from "./Home"
export default function App() {
    return (
        <div>
            <NavBar />
            <Switch>

                <Route path="/about"> <About /></Route>
                <Route path="/login"><Login /></Route>
                <Route exact path="/"> <Home /></Route>
            </Switch>
        </div>
    )
}
