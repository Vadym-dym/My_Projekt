import React from "react";
import "./App.css";
import LandingPage from "./Components/LandingPage";
import "./Components/Style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Ingredients from "./Components/Ingredients";

function App() {
    return (
        <Router>
            <div >
                <Switch>
                    <Route path="/" exact component={LandingPage}/>
                    <Route path="/ingredients" component={Ingredients}/>
                </Switch>
            </div >
        </Router>
    );
}
export default App;
