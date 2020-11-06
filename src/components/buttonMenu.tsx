import React from 'react';
import { ButtonHamburger } from './styled';

interface ButtonMenuProps {
  onClick: () => void;
  open?: boolean;
}

const ButtonMenu = (props: ButtonMenuProps) => {
  return (
    <ButtonHamburger onClick={props.onClick} open={props.open} className="nav-icon">
      <div></div>
    </ButtonHamburger>
  );
};

export default ButtonMenu;
