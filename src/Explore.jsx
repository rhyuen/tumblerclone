import React from "react";
import styled from "styled-components";


const Presentation = styled.div`    
    margin-top: 6vh;
    display: flex;    
    width: 1024px;
    background: white;
    min-height: 100vh;    
    box-sizing: border-box;    
`;
export default () => {
      return (
        <Presentation>
            I explore regularly. And I have k8s.  So I'm extra awesome.   <br/>
            Perhaps you should use CSS Grid for this page <br/>   
            Like seriously use css grid.  For all that mosaic stuff <br/>
            MAY 8, 2018 <br/>
            don't flake <br/>     
        </Presentation>
    );
}