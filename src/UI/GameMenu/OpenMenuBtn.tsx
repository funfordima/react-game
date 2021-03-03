import styled from 'styled-components';

const OpenMenuBtn = styled.button`
  padding: 8px 30px;
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
  white-space: nowrap;
  align-items: center;
  background: #2C2220;
  border-radius: 5px;
  border: 3px solid #4C422D;
  box-shadow: inset 0px 0px 1px 2px #f9cb0e;
  color: #fff;
  cursor: pointer;
  outline: none;
  transition: all 200ms ease;
  
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 805px) {
    bottom: -50px;
    top: inherit;
  }
`;

export default OpenMenuBtn;
