import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-right: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const Subtitle = styled.h2`
  margin: 0;  
  font-size: 1em;
`;

const Text = styled.p`
  line-height: 1.45;
`;

const GameIntro: React.FC = () => (
  <Container>
    <Subtitle>
      Play
      <strong>2048 Game</strong>
      Online
    </Subtitle>
    <Text>
      Join the numbers and get to the
      <strong> 2048 tile!</strong>
    </Text>
  </Container>
);

export default GameIntro;
