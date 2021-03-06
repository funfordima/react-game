import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  display: none;

  &:checked ~ [for="#switcher"]:after {
    left: 65px;
  }
`;

const Label = styled.label`
margin-bottom: 10px;
position: relative;
display: block;
width: 40px;
height: 40px;
border-radius: 20px;
border: 1px solid #4C422D;
box-shadow: inset 0px 0px 1px 1px #f9cb0e;
// box-shadow:
//       inset 0 2px 1px rgba(0,0,0,.15),
//       0 2px 5px rgba(200,200,200,.1);
cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    top: 8%; right: 8%; bottom: 8%; left: 8%;
    border-radius: 100%;
    background: #010810;
    box-shadow:
        0 3px 5px rgba(0,0,0,.25),
        inset 0 1px 0 rgba(255,255,255,.3),
        inset 0 -5px 5px rgba(100,100,100,.1),
        inset 0 5px 5px rgba(255,255,255,.3);
  }

  &:after {
    content: "";
    position: absolute;
    left: 40%; top: 40%;
    width: 20%;
    height: 20%;
    border-radius: 100%;
    background: #010810 radial-gradient(40% 35%, #ccc, #010810 60%);
    box-shadow: inset 0 -1px 1px 0px #010810, 0 1px 0 #f9cb0d, inset 0 1px 0 #f9cb0d;
  }
`;

interface ThemeSwitcherProps {
  id: string;
  callback: () => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ id, callback }) => (
  <>
    <Input
      type='checkbox'
      id={id}
    />
    <Label htmlFor={id} onClick={callback} />
  </>
);

export default ThemeSwitcher;
