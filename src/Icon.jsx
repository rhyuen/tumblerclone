import React from "react";
import styled from "styled-components";

export default ({color = "white", children}) => {
    const Icon = styled.div`
        height: 2vw;
        width: 2vw;
        background: #343434;    
        color: ${color};
        display: flex;
        justify-content: center;
        align-items: center;        
    `;

    return <Icon>{children}</Icon>;
};