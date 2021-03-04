import React from 'react';
import styled from 'styled-components';

const Container = styled.p`
  margin-top: 20px;
  width: 450px;
  margin-bottom: 20px;
  text-align: justify;
`;

const GameExplanation: React.FC = () => (
  <Container>
    <strong>How to play: </strong>
    Use your
    <strong> arrow keys or A, S, D, W </strong>
    to move the tiles. When two tiles with the same number touch, they
    <strong> merge into one!</strong>
  </Container>
);

export default GameExplanation;
