import React, {Component} from 'react';



class Title extends Component {
    render(){
        return(
                <div className="nav">
                    <ul>
                        <li> <a href="/"> Home </a> </li>
                        <li> <a href="#projects"> Projects </a> </li>
                        <li> <a href="#contact"> Contact </a> </li>
                    </ul>
                </div>
        );
    }
}
export default Title;