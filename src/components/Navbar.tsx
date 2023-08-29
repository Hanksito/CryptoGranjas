

import React from 'react';
import styled from 'styled-components';
import gato from "../assets/img/Yuta-con-gafas.png"
const NavbarContainer = styled.div`
  background-color: black;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 15px;
`;



const Button = styled.button`
  background-color: green;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: darkgreen;
  }

  svg {
    margin-right: 8px;
  }
`;
 const Image = styled.img`
  max-width: 40px;
  object-fit: contain;
  height: auto;
  max-height: 40px;
`;
const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Image src={gato} alt="yuca-el-gato-con-gafas" />
      <Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3 8h-2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2H5c-.55 0-1-.45-1-1s.45-1 1-1h2V5c0-.55.45-1 1-1s1 .45 1 1v2h2c.55 0 1 .45 1 1s-.45 1-1 1z"
          />
        </svg>
        Crear
      </Button>
    </NavbarContainer>
  );
};

export default Navbar;
