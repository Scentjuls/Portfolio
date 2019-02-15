import React, {Component} from "react";

class Contact extends Component  {
    render(){
        return (
            <div id="contact">
                <h1 className="projects floating"> Contacts</h1>
                <h2 className="touch"> Let's Get In Touch </h2>
                <p className="contact"> Feel Free To Hit Me Up...Want me to do a project? That's awesome! send me an email and I will get back
                to you as quick as possible! You can also follow me on Twitter as well as check out my Codepen as well as Github for really cool projects</p>
                <div className="social">
                    <div className="twitter">
                    <a href="https://twitter.com/chidimma__"><i className="big fab fa-twitter fa-3x"></i><p className="text"> @chidimma__ </p> </a>
                    </div>
                    <div className="github">
                    <a href="https://github.com/Scentjuls"><i className="big fab fa-github fa-3x"></i><p className="text"> Scentjuls </p> </a>                    
                    </div>
                    <div className="codepen">
                    <a href="https://codepen.io/Scentjuls"><i className="big fab fa-codepen fa-3x"></i><p className="text"> Scentjuls </p> </a>                    
                    </div>
                    <div className="envelope">
                    <a href="mailto:chidynwanya11@gmail.com"><i className="big far fa-envelope fa-3x"></i><p className="text"> chidynwanya11@gmail.com</p> </a>
                    </div>
                </div>
            </div>
        );
    }
}
export default Contact;