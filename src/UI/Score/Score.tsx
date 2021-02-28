import React from 'react';
import styled from 'styled-components';

const Score = styled.div<{ text: string }>`
  margin-top: 8px;
  padding: 15px ${({ text }) => text === 'score' ? '25px' : '30px'};
  height: 60px;
  font-size: 25px;
  font-weight: 700;
  line-height: 47px;
  position: relative;
  display: inline-block;
  background: #bbada0;
  border-radius: 3px;
  color: #fff;
  text-align: center;

    &::after {
      content: '${({ text }) => text}';
      position: absolute;
      width: 100%;
      top: 10px;
      left: 0;
      text-transform: uppercase;
      font-size: 13px;
      line-height: 13px;
      text-align: center;
      color: #eee4da;
    }
`;

interface ScoreContainerProps {
  text: string;
  children: React.ReactNode;
}

const ScoreContainer: React.FC<ScoreContainerProps> = ({ text, children }) => (<Score text={text}> {children} </Score>);

export default ScoreContainer;
