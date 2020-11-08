import React from 'react';
import { Radio } from './styled';
interface RadioButtonProps {
  value: string;
  name: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

const RadioButton = ({ value, name, label, onChange, checked }: RadioButtonProps) => {
  return (
    <Radio htmlFor={value} className="radio radio-before">
      <span className="radio__input">
        <input
          type="radio"
          id={value}
          name={name}
          onChange={onChange}
          value={value}
          checked={checked}
        />
        <span className="radio__control"></span>
      </span>
      <span className="radio__label">{label}</span>
    </Radio>
  );
};

export default RadioButton;
