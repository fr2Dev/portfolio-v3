import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  margin: 1em;
  width: 32px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;

  &:after,
  &:before,
  & div {
    background-color: #fff;
    border-radius: 3px;
    content: '';
    display: block;
    height: 3px;
    margin: 5px 0;
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    &:before {
      transform: translateY(8px) rotate(135deg);
    }

    &:after {
      transform: translateY(-8px) rotate(-135deg);
    }

    & div {
      transform: scale(0);
    }
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

interface ButtonMenuProps {
  onClick: () => void;
}

const ButtonMenu = (props: ButtonMenuProps) => {
  return (
    <Button onClick={props.onClick} className="nav-icon">
      <div></div>
    </Button>
  );
};

export default ButtonMenu;
