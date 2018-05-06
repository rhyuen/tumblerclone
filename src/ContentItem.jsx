import React from "react";
import styled from "styled-components";
import Icon from "./Icon.jsx";

const ItemSection = styled.div`
    margin-bottom: 2vh;
    background: white;
    width: 100%;
    border-radius: 5px;
    font-size: 14px;
    font-family: Helvetica;
    font-weight: bold;
    border: 1px solid rgba(0,0,0,0.1);
    box-shadow: 10px 10px 8px rgba(0,0,0,0.1);
`;
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
    color: palevioletred;
    height: 1vw;    
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid palevioletred;
    border-radius: 5px;
    padding: 0 0.5vw;
    margin-left: 1vw;
    box-sizing: border-box;

    &:hover{        
        color: black;
        border-color: black;
    }
`;

const Content = styled.div`
    background: lavender;
    height: 20vh;
    display: flex;
    align-items: center;
    font-size: 20px;
    box-sizing: border-box;
`;
const Footer = styled.div`
    margin: 2vh;
`;
const Actions = styled.div`
    margin: 2vh;
`;

const CornerButton =  styled(Icon)`
    margin-left: 2vw;    
    font-size: 5px;
`;

export default ({author, title, score, date}) => {  
    if(!author && !date && !score){
        const AdSection = ItemSection.extend`
            box-shadow: 0px 0px 0px white;
        `;

        return (
            <AdSection>
                <Content>{title}</Content>
                <Actions>Actions</Actions>
            </AdSection>
        );
    }

    return (
        <ItemSection>                 
            <Header>
                <HeaderDetails>{author}
                    <HeaderActionsItem>Follow</HeaderActionsItem>
                </HeaderDetails>
                <HeaderActions>
                    <CornerButton background = "papayawhip" color = "black" size = "1vw">M</CornerButton>
                    <CornerButton background = "palevioletred" color = "white" size = "1vw">D</CornerButton>
                </HeaderActions>
            </Header>            
            <Content>{title}</Content>
            <Footer>{date}</Footer>
            <Actions>
                <HeaderDetails>
                    <HeaderActionsItem>{score}</HeaderActionsItem>
                </HeaderDetails>
            </Actions>            
        </ItemSection>
    );
};