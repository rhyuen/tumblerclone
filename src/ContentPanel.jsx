import React from "react";
import styled from "styled-components";
import Icon from "./Icon.jsx";

const Header = styled.div`  
    margin: 2vh;          
    display: flex;
    justify-content: space-between;        
`;

const HeaderDetails = styled.div`
    display: flex;
`;

const HeaderActions = styled.div`
    display: flex;
`;
const HeaderActionsItem = styled.div`
    color: #4842b7;
    height: 1vw;    
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #4842b7;
    border-radius: 5px;
    padding: 0 0.5vw;
    margin-left: 1vw;
    box-sizing: border-box;

    &:hover{        
        color: black;
        border-color: black;
    }
`;

const BottomActionItem = styled(HeaderActionsItem)`
    margin: 0;
`;

const Actions = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2vh;
`;

const CornerButton =  styled(Icon)`
    margin-left: 2vw;    
    font-size: 5px;
`;


export default ({type, author, score}) => {
    if (type === "bottom"){
        return (
            <Actions>
                <HeaderDetails>
                    <BottomActionItem>{score}</BottomActionItem>
                </HeaderDetails>
                <HeaderActions>
                    <CornerButton background = "black" color = "white" size = "1vw">+</CornerButton>
                    <CornerButton background = "black" color = "white" size = "1vw">&lt;</CornerButton>
                </HeaderActions>
            </Actions>            
        );
    }else{
        return (
            <Header>
            <HeaderDetails>
                {author}
                <HeaderActionsItem>Follow</HeaderActionsItem>
            </HeaderDetails>
            <HeaderActions>
                <CornerButton background = "#343434" color = "white" size = "1vw">M</CornerButton>
                <CornerButton background = "#343434" color = "white" size = "1vw">D</CornerButton>
            </HeaderActions>
        </Header>
        )
    }
};