import React, {Component} from 'react';

class Home extends Component{
    render(){
        return(
            <div className="home">
            <h1 className="margin animated fadeInDown"> Hello </h1>
            <h2 className="wait animated fadeIn">My name is Chidimma but my friends call me Scenti </h2>
            <h2 className="long animated fadeInLeft">I'm a Frontend Developer, who loves <span className="purple"> Angular </span>  i also write </h2>
            <h2 className="long animated fadeInLeft">a little bit of <span className="purple"> Vue </span> as well as <span className="purple"> React </span> </h2>
            <hr className="horizontal animated fadeIn"/>
            <p className="stay animated fadeIn">I currently work at Tangerine Africa, I'm a passionate and driven individual who loves 
              coding, traveling and meeting new people. I strongly believe in exposure and gaining experience. I also crave
              writing media queries as weird as that sounds, and with every line of code I write, I strive to make the web a beautiful place. </p>
            <div className="caret animated fadeIn floating">
                 <a href="#projects"><i className="caret fas fa-caret-down animated fadeIn fa-3x"></i></a>
             </div>
            </div>
        );
    }
}
export default Home;