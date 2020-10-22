import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  margin: 1em;
  width: 40px;

  &:after,
  &:before,
  & div {
    background-color: #fff;
    border-radius: 3px;
    content: '';
    display: block;
    height: 5px;
    margin: 7px 0;
    transition: all 0.2s ease-in-out;
  }

  &:hover:before {
    transform: translateY(12px) rotate(135deg);
  }

  &:hover:after {
    transform: translateY(-12px) rotate(-135deg);
  }

  &:hover div {
    transform: scale(0);
  }
`;

const ButtonMenu = () => {
  return (
    <Button className="nav-icon">
      <div></div>
    </Button>
  );
};

export default ButtonMenu;
