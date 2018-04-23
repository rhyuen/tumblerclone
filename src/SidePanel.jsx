import React from "react";
import styled from "styled-components";
import data from "./data.json";

const RootContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;    
    width: 30%;
    font-family: Helvetica;
    font-size: 14px;
`;

const Section = styled.div`    
    margin: 0 auto;
    width: 95%;    
`;
const SectionTitle = styled.div`
    border-bottom: 1px solid rgba(0,0,0,0.4);
    font-weight: bold;
    padding-bottom: 1vh;
    text-transform: uppercase;
`;
const SectionContent = styled.div`
`;
const Item = styled.div`
    display: flex;
    padding: 0.5vw 0vw;  
    border-bottom: 1px solid rgba(0,0,0,0.1);

    &:hover{
        background: rgba(0,0,0,0.1);
    }
`;
const ItemIcon = styled.div`
    height: 2vw;
    width: 2vw;
    background: #343434;    
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;        
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
const ItemSubscribe = styled.div`
    background: lavender;
    width: 2vw;
    height: 2vw;
`;

export default ({}) => {
    return (
        <RootContainer>
            <Section>
                <SectionTitle>Duper Heroes</SectionTitle>
                <SectionContent>
                    {
                        data.data.map(item => {
                            return (
                                <Item>
                                    <ItemIcon>{item.name[0]}</ItemIcon>
                                    <ItemTextContainer>
                                        <TextTitle>{item.name}</TextTitle>
                                        <TextSubtitle>{item.occupation}</TextSubtitle>
                                    </ItemTextContainer>
                                    <ItemSubscribe/>
                                </Item>
                            );
                        })
                    }
                </SectionContent>
            </Section>
            <Section><SectionTitle>Two</SectionTitle></Section>            
        </RootContainer>
    );
}