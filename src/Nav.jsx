import React from "react";
import styled from "styled-components";
import Search from "./Search.jsx";

const Nav = styled.div`    
    background: white;
    display: flex;    
    position: fixed;
    justify-content: space-between;
    box-sizing: border-box;
    height: 5vh;
    padding: 0 10vw 0 10vw;    
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,0.1);
`;
const NavComponent = styled.div`
    background: grey;    
    display: flex;
`;
const NavForm = styled.div`
    display: flex;    
`;

const NavItem = styled.div`
    background: lavender;
    width: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bolder;
`





export default ({}) => {
    return (
        <Nav>
            <NavComponent>
                <NavItem>A</NavItem>                
                <NavForm>
                    <Search/>                                            
                </NavForm>
            </NavComponent>
            <NavComponent>
                <NavItem>R</NavItem>
                <NavItem>O</NavItem>
                <NavItem>A</NavItem>
                <NavItem>R</NavItem>                
            </NavComponent>            
        </Nav>
    );
}