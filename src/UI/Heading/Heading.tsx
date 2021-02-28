import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface HeadingProps {
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ children }) => (
  <Header>
    {children}
  </Header>
);

export default Heading;
