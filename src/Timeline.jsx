import React from "react";
import styled from "styled-components";

const Timeline = styled.div`    
    width: 70%;
    display: flex;
    flex-direction: column;
    background: white;    
    box-sizing: border-box;
`;
export const TimelineItem = styled.div`    
    width: 90%;
    margin: 0 auto;
    display: flex;    
`;

const AvatarHover = styled.div`
    display: none;
    position: absolute;
    box-sizing: border-box;
    width: 20vh;
    height: 30vh;
    background: rgba(0,0,0,0.1);    
    border: 1px solid rgba(0,0,0,0.1);
    bottom: -30vh;            

    &:hover {
        display: block;
    }    
`;

const AvatarSection = styled.div`        
    position: relative;
    box-sizing: border-box;        
    background: #343434;    
    width: 5vh;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;        
    margin-right: 2vh;        
    
    &:hover ${AvatarHover} {
        display: block;
    }
`;
const Avatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-transform: uppercase;
`;

export const ItemSection = styled.div`
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
    font-size: 14px;
    font-family: Helvetica;
    font-weight: bold;
    background: lavender;
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

const CloseBtn = styled.input`
    type: button;
    background: ${props => props.color};    
    border: none;
    height: 100%;    
    text: ${props => props.text}
`;


export default ({content}) => {    
    const listOfItems = content.map((item) => {        
        return (
            <TimelineItem>
                <AvatarSection>                    
                    <Avatar>{item.author[0]}</Avatar>
                    <AvatarHover/>
                </AvatarSection>                
                <ItemSection>
                    <Header>{item.author} <CloseBtn color = "blue" text="shadow"/></Header>
                    <Content>{item.title}</Content>
                    <Footer>{item.score} | {item.date}</Footer>
                    <Actions>Actions</Actions>
                </ItemSection>
            </TimelineItem>
        );
    });
    return <Timeline>{listOfItems}</Timeline>;
}