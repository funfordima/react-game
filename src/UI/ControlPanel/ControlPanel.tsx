import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

interface ControlPanelProps {
  children: React.ReactNode;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ children }) => (
  <Container>
    {children}
  </Container>
);

export default ControlPanel;
