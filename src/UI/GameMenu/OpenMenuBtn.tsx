import styled from 'styled-components';

const OpenMenuBtn = styled.button`
  padding: 10px 20px;
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
  white-space: nowrap;
  align-items: center;
  background-color: #ccc;
  border-radius: 5px;
  border: none;
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
