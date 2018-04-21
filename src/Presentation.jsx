import React from "react";
import styled from "styled-components";
import Timeline from "./Timeline.jsx";
import SidePanel from "./SidePanel.jsx";

const Presentation = styled.div`    
    margin-top: 2vh;
    display: flex;    
    width: 1024px;
    background: pink;
    min-height: 100vh;    
    box-sizing: border-box;
`;

export default ({content}) => {
    return (
        <Presentation>            
            <Timeline content = {content}/>
            <SidePanel/>
        </Presentation>
    );
}