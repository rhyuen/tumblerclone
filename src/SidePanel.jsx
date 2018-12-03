import React from "react";
import styled from "styled-components";
import uuid from "uuid";
import data from "./data.json";
import Icon from "./Icon.jsx";
import {AdSection} from "./ContentItem.jsx";

const RootContainer = styled.div`
    display: none;
    flex-direction: column;
    background-color: white;    
    width: 30%;    
    font-family: Helvetica;
    font-size: 14px;    

    @media(min-width: 1200px){
        display: flex;
    }
`;

const Section = styled.div`    
    margin: 0 auto;
    width: 100%;    
    margin-bottom: 2vw;
`;
const SectionTitle = styled.div`
    border-bottom: 1px solid rgba(0,0,0,0.4);
    font-weight: bold;
    padding-bottom: 1vh;
    margin-bottom: 1vh;
    text-transform: uppercase;
`;
const SectionContent = styled.div`
`;
const ItemSubscribe = styled.div`
    background: lavender;    
    width: 2vw;
    height: 2vw;        
`;

const Item = styled.div`
    display: flex;
    padding: 0.5vw 0vw;  
    border-bottom: 1px solid rgba(0,0,0,0.1); 
    justify-content: space-between;
    
    &:hover{
        background: rgba(0,0,0,0.1);
    }

    &:hover ${ItemSubscribe}{
        background: #4842b7;
    }
`;
const ItemDetails = styled.div`
    display: flex;    
`;

const ItemTextContainer = styled.div`
    padding-left: 5px;        
`;
const TextTitle = styled.div`
    font-weight: bold;
`;
const TextSubtitle = styled.div`
    font-size: 13px;
`;

export default ({}) => {
    return (
        <RootContainer>
            <Section key = {uuid.v4()}>
                <SectionTitle>Duper Heroes</SectionTitle>
                <SectionContent>
                    {
                        data.data.map(item => {
                            return (
                                <Item key = {uuid.v4()}>
                                    <ItemDetails>
                                        <Icon>{item.name[0]}</Icon>
                                        <ItemTextContainer>
                                            <TextTitle>{item.name}</TextTitle>
                                            <TextSubtitle>{item.occupation}</TextSubtitle>
                                        </ItemTextContainer>
                                    </ItemDetails>
                                    <ItemSubscribe/>
                                </Item>
                            );
                        })
                    }
                </SectionContent>
            </Section>
            <Section key = {uuid.v4()}>
                <SectionTitle>Advertisements</SectionTitle>
                <SectionContent>
                    <AdSection title = "Ad TITLE that does stuff and stuff."/>
                </SectionContent>
            </Section>                  
        </RootContainer>
    );
}