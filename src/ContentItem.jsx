import React from "react";
import styled from "styled-components";
import Icon from "./Icon.jsx";
import ContentPanel from "./ContentPanel.jsx";

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

const AdSection = ({title}) => {    
    const AdSection = ItemSection.extend`
        box-shadow: 0px 0px 0px white;
    `;

    return (
        <AdSection>
            <Content>{title}</Content>
            <ContentPanel type = "bottom" score = "1234"/>
        </AdSection>
    );    
};

export {AdSection};

export default ({author, title, score, date, category}) => {  
    return (
        <ItemSection>                 
            <ContentPanel type = "top" author = {author} />
            <Content>{title}</Content>
            <Footer>{date} | {category}</Footer>
            <ContentPanel type = "bottom" score = {score}/>            
        </ItemSection>
    );
};