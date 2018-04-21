import React from "react";
import styled from "styled-components";

const Timeline = styled.div`    
    width: 70%;
    background: orange;    
`;
const TimelineItem = styled.div`    
    width: 90%;
    margin: 0 auto;
    display: flex;

`;
const AvatarSection = styled.div`    
    background: grey;
    width: 5vh;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5vh;
    margin-right: 2vh;
    
`;
const Avatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`;

const ItemSection = styled.div`
    margin-bottom: 2vh;
    background: white;
    width: 100%;
    border-radius: 5px;
    font-size: 14px;
    font-family: Helvetica;
    font-weight: bold;
`;
const Header = styled.div`  
    margin: 2vh;
    font-size: 14px;
    font-family: Helvetica;
    font-weight: bold;
`;
const Content = styled.div`
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
                    <Avatar>{item.name[0]}</Avatar>
                </AvatarSection>                
                <ItemSection>
                    <Header>{item.name}</Header>
                    <Content>{item.description}</Content>
                    <Footer>{item.occupation}</Footer>
                    <Actions>Actions</Actions>
                </ItemSection>
            </TimelineItem>
        );
    });
    return <Timeline>{blah}</Timeline>;
}