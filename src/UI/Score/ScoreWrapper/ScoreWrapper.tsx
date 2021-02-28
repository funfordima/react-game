import React from 'react';
import styled from 'styled-components';

const ScoreWrap = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface ScoreWrapperProps {
  children: React.ReactNode;
}

const ScoreWrapper: React.FC<ScoreWrapperProps> = ({ children }) => (
  <ScoreWrap>
    {children}
  </ScoreWrap>
);

export default ScoreWrapper;
