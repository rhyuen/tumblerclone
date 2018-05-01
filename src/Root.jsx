import React from "react";
import {HashRouter as Router, Route, Link} from "react-router-dom";
import styled from "styled-components";
import App from "./App.jsx";
import Nav from "./Nav.jsx";

const Presentation = styled.div`    
    margin-top: 6vh;
    display: flex;    
    width: 1024px;
    background: white;
    min-height: 100vh;    
    box-sizing: border-box;    
`;

const Personal = () => {return <Presentation>I am a person</Presentation>};
const Explore = () => {
    return (
        <Presentation>
            I explore regularly. And I have k8s.  So I'm extra awesome.           
        </Presentation>
    );
}

const Root = () => {
    const STX = styled.div`
        width: 100%;
        display: flex;                
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
    `;

    return (
        <Router>            
            <STX>
                <Nav/>                        
                <div>
                    <Route exact path = "/" component = {App}/>
                    <Route path = "/explore" component = {Explore}/>
                    <Route path = "/personal" component = {Personal}/>
                </div>                            
            </STX>            
        </Router>
    );
};


export default Root;
