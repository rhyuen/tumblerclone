import React, {Component} from "react";
import Nav from "./Nav.jsx";
import Presentation from "./Presentation.jsx";
import data from "./data.json";

class App extends Component{
    state = {
        data: []
    }

    componentDidMount (){
        this.setState({
            data: data.data
        });
    }
    render(){
        return (
            <div className = "root">           
                <Nav/>        
                <Presentation content = {this.state.data}/>                                
            </div>
        )
    }
}

export default App;