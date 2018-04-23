import React, {Component} from "react";
import Nav from "./Nav.jsx";
import Presentation from "./Presentation.jsx";
// import data from "./data.json";
import reddit from "./reddit.json";

class App extends Component{
    state = {
        data: []
    }

    componentDidMount(){
        // const url = "https://reddit.com/.json";
        // const options = {
        //     mode: "no-cors"
        // };
        // fetch(url, options)
        //     .then(res => {
        //         console.log(res.type);
        //         return res.json();
        //     })
        //     .then(data => {
        //         const less_data = data.children.map(item => {
        //             return {
        //                 author: item.author,
        //                 score: item.score,
        //                 title: item.title,
        //                 url: item.url,
        //                 date: item.created_utc
        //             };
        //         });
        //        this.setState({
        //             data: less_data
        //        });
        //     });             
        const less_data = reddit.data.children.map(item => {
            return {
                author: item.data.author,
                score: item.data.score,
                title: item.data.title,
                url: item.data.url,
                date: item.data.created_utc
            };
        });

        this.setState({
            data: less_data
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