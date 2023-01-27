import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from "./Nav";


const Header = () => {
  return (
    <MainHeader>
        <NavLink to='/'>
            <h1>Home</h1>
        </NavLink>
    </MainHeader>
  );
};

const MainHeader = styled.header`
 padding: 0 4.8rem;
 height: 10rem;
 background-color: ${({ theme}) => theme.colors.big};
 display: flex;
 justify-content: space-between;
 align-items: center;
 position: relative;
 
 `;


export default Header;