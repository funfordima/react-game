import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

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
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Main>
    <Content>
      {children}
    </Content>
  </Main>
);

export default Layout;
