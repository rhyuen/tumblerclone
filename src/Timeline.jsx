import React from "react";
import styled from "styled-components";

const Timeline = styled.div`    
    width: 70%;
    background: white;    
`;
const TimelineItem = styled.div`    
    width: 90%;
    margin: 0 auto;
    display: flex;

`;
const AvatarSection = styled.div`    
    background: #343434;    
    width: 5vh;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;    
    margin-right: 2vh;
    
`;
const Avatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-transform: uppercase;
`;

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
    font-size: 14px;
    font-family: Helvetica;
    font-weight: bold;
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

export default ({content}) => {    
    const blah = content.map((item) => {        
        return (
            <TimelineItem>
                <AvatarSection>
                    <Avatar>{item.author[0]}</Avatar>
                </AvatarSection>                
                <ItemSection>
                    <Header>{item.author}</Header>
                    <Content>{item.title}</Content>
                    <Footer>{item.score} | {item.url} | {item.date}</Footer>
                    <Actions>Actions</Actions>
                </ItemSection>
            </TimelineItem>
        );
    });
    return <Timeline>{blah}</Timeline>;
}