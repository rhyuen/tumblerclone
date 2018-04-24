import React from "react";
import styled from "styled-components";

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
const Search = styled.div`
    display: flex;    
    position: relative;
`;

const NavItem = styled.div`
    background: lavender;
    width: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bolder;
`

const SearchDropdownContainer = styled.div`
    display: none;        
    position: absolute;
    top: 5.5vh;
    background: white;
    width: 50vh;
    height: 50vh;
    z-index: 10;
    border: 1px solid rgba(0,0,0,0.1);    

    &:hover {
        background: lavender;
    }
`;


const NavInput = styled.input`     
    width: 50vh;
    box-sizing: border-box;
    font-size: 20px;
    padding-left: 2vh;
    border: 2px solid transparent;
    
    &:focus ~ ${SearchDropdownContainer} {
        display: block;
    }
    
    &:focus{
        border-bottom: 2px solid black;
        outline: none;
    }  
`;



export default ({}) => {
    return (
        <Nav>
            <NavComponent>
                <NavItem>A</NavItem>                
                <NavForm>
                    <Search>
                        <NavInput type = "text" placeholder = "Search Me Guise"/>                                            
                        <SearchDropdownContainer/>
                    </Search>
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