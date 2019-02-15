import React, {Component} from "react";


class Projects extends Component {
    render(){
        return(
            <div id="projects">
                <h1 className="projects floating"> Projects </h1>
                <div className="grid-flex">
                    <div className="col col-image floating">
                        <img src="/authenticate.png" alt= "authentication"/>
                    </div>
                    <div className="col col-text">
                    <div className="Aligner-item">
                    <p className="heading"> A Simple Authentication Page </p><br/>
                    <p className="description">Using NodeJS and MongoDB, I created a simple Web App to demonstrate authentication. This module can be applied to dynamic applications to provide 
                    authentication and resource security. You can check it out on <a href="https://scentjuls.github.io/Authentication/" target="_blank"> Authenticate </a>
                        </p>
                    </div>
                    </div>
                   
                     </div> 
                     <div className="grid-flex">
                    <div className="col col-image floating">
                        <img src="/car-finder.png" alt= "car finder"/>
                    </div>
                    <div className="col col-text col-left">
                    <div className="Aligner-item">
                        <p className="heading">Find Any Car </p> <br/>
                        <p className="description"> This uses simple API technology to retrieve the location of registered cars in a geographic location. This is made possible by posting vehicle
                             information to the server using POST method, and retrieving using GET method. Also used GeoJSON for Geolocation handling.
                        </p>
                    </div>
                    </div>
                     </div>
                     <div className="grid-flex">
                    <div className="col col-image floating">
                        <img src="/todo.png" alt= "todo picture"/>
                    </div>
                    <div className="col col-text">
                    <div className="Aligner-item">
                        <p className="heading">A To-do App </p> <br />
                       <p className="description"> Using NodeJS and Mlab(a managed cloud database service that hosts MongoDB databases), I created a To-do app that lets users document and follow up with tasks.
                        </p>
                    </div>
                    </div>
                     </div>
                     
            </div>
        );
    }
}

export default Projects;