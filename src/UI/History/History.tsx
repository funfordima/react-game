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
`;

const ContentContainer = styled.div`
  padding-top: 20px;
  width: 90%;
  height: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflowY: scroll;
  color: #fff;
  font-size: 20px;
  text-transform: uppercase;
  font-family: monospace;

  & p {
    padding: 5px 10px;
    width: 80%;
    text-align: left;
    border-bottom: 2px solid #FCE62F;
  }
`;

const Content = styled.p`
`;

const History: React.FC = () => (
  <Overlay>
    <Widget>
      <WidgetTitle>
        <span>Battle : </span>
        <span>History</span>
      </WidgetTitle>
      <ContentContainer>
        <Content>1. 1235</Content>
        <Content>2. 2000</Content>
      </ContentContainer>
    </Widget>
  </Overlay>
);

export default History;
