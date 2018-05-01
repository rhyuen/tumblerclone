import React from "react";
import styled from "styled-components";
import Search from "./Search.jsx";
import Icon from "./Icon.jsx"
import {Link} from "react-router-dom";

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
    display: flex;
`;
const NavForm = styled.div`
    background: white;
    display: flex;    
`;

const NavItem = styled.div`
    background: lavender;
    width: 5vh;
    margin-right: 1vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bolder;
`;

const NavUserItem = styled.div`
    background: white;
    width: 20vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;        
`;

const UserDetails = styled.div`
    display: flex;
    background: white;    
    box-sizing: border-box;
    align-items: center;
    height: 100%;
    padding-left: 5px;
    font-size: 13px;
`;

export default ({}) => {
    return (
        <Nav>
            <NavComponent>
                <NavItem><Link to = "/">A</Link></NavItem>                
                <NavForm>
                    <Search/>                                            
                </NavForm>
            </NavComponent>
            <NavComponent>
                <NavItem><Link to = "/explore">R</Link></NavItem>
                <NavItem><Link to = "/personal">O</Link></NavItem>                             
                <NavUserItem>
                    <Icon>R</Icon>
                    <UserDetails>User Details<br/>{new Date().toLocaleString()}</UserDetails>
                </NavUserItem>
            </NavComponent>            
        </Nav>
    );
}