import React from 'react';
import styled from 'styled-components';

const Main = styled.main<{ value: boolean }>`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${({ value }) => value ? '#000' : '#faf8ef'};
  color: #776e65;
  font-family: clear sans, helvetica neue, Arial, sans-serif;
  font-size: 18px;

  @media (max-width: 805px) {
    padding: 10px;
  }
`;

const Content = styled.div`
  min-height: 600px;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface LayoutProps {
  children: React.ReactNode;
  val: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, val }) => (
  <Main value={val}>
    <Content>
      {children}
    </Content>
  </Main>
);

export default Layout;
