import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  display: block;
  opacity: 1;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #071721;
  z-index: 20;
  transition: all 200ms ease; 
`;

const Widget = styled.div`
  margin: auto;
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  background: #000;
  opacity: 1;
  border-radius: 10px;
  box-shadow: inset 0px 0px 1px 2px #f9cb0e;
  z-index: 21;
  transition: all 200ms ease; 
`;

const WidgetTitle = styled.div`
  padding: 5px;
  font-size: 25px;
  line-height: 1.5;
  text-transform: uppercase;
  color: #FCE62F;
  font-family: cursive;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  & span {
    font-size: 1.5em;
  }
`;

interface EndGameWidgetProps {
  result: number,
  onClose: () => void,
}

const EndGameWidget: React.FC<EndGameWidgetProps> = ({ result, onClose }) => (
  <Overlay onClick={onClose}>
    <Widget>
      <WidgetTitle>
        Your result is:&nbsp;
        <span>{result}</span>
      </WidgetTitle>
    </Widget>
  </Overlay>
);

export default EndGameWidget;
