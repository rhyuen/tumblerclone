import React from "react";
import styled from "styled-components";

const RootContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;    
    width: 30%;
    font-family: Helvetica;
    font-size: 14px;
`

const Section = styled.div`
    background: lavender;
    margin: 0 auto;
    width: 95%;    
`;
const SectionTitle = styled.div`
    border-bottom: 1px solid rgba(0,0,0,0.4);
    font-weight: bold;
    padding-bottom: 1vh;
`;
const SectionContent = styled.div`
`;

export default ({}) => {
    return (
        <RootContainer>
            <Section><SectionTitle>One</SectionTitle></Section>
            <Section><SectionTitle>Two</SectionTitle></Section>
            <Section><SectionTitle>Three</SectionTitle></Section>
            <Section><SectionTitle>Four</SectionTitle></Section>
        </RootContainer>
    );
}