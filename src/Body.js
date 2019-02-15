import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';



import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";

class Body extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Route exact path ="/" component={Home}/>
                    <Projects />
                    <Contact />
                </div>
            </Router>
        );
    }
}
export default Body;