import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  display: none;

  &:checked ~ [for="#switcher"]:after {
    left: 65px;
  }
`;

const Label = styled.label`
  position: relative;
  width: 100px;
  height: 10px;
  padding: 18px 18px;
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 1.5;
  opacity: 1;
  border: 3px solid #4C422D;
  border-radius: 20px;
  box-shadow: inset 0px 0px 1px 2px #f9cb0e;
  background: #010810;
  color: #fff;
  text-shadow: 1px 1px 0px rgba(255,255,255,.15);
  cursor: pointer;

  &:before {
    content: "OFF";
    position: absolute;
    top: 8px;
    right: 12px;
    color: #fff;
    font-size: 14px;
  }

  &:after {
    content: "";
    position: absolute;
    left: 17px;
    top: 3px;
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50px;
    background: #FCDC0B linear-gradient(#FCDC0B 0%, #EEAA23 40%, #FCDC0B 100%);
    transition: .5s;
  }
`;

interface OnOffButtonProps {
  handlerToggleVolumeMusic: () => void;
}

const OnOffButton: React.FC<OnOffButtonProps> = ({ handlerToggleVolumeMusic }) => (
  <>
    <Input
      type='checkbox'
      id='switcher'
    />
    <Label htmlFor='switcher' onClick={handlerToggleVolumeMusic}>
      ON
    </Label>
  </>
);

export default OnOffButton;
