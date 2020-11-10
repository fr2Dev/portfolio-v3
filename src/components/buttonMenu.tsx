import React from 'react';
import { ButtonHamburger } from './styled';

interface ButtonMenuProps {
  onClick: () => void;
  open?: boolean;
  id?: string;
}

const ButtonMenu = ({ onClick, open, ...rest }: ButtonMenuProps) => {
  return (
    <ButtonHamburger onClick={onClick} $open={open} className="nav-icon" {...rest}>
      <div></div>
    </ButtonHamburger>
  );
};

export default ButtonMenu;
