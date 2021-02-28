import React from 'react';
import styled from 'styled-components';

const TitleElement = styled.h1`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 74px;
  line-height: 66px;
  font-weight: 700;
`;

const TitleLink = styled.a`
  color: #776e65;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
`;

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => (
  <TitleElement>
    <TitleLink href='/'>
      {text}
    </TitleLink>
  </TitleElement >
);

export default Title;
