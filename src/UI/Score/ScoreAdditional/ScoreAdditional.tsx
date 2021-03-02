import styled from 'styled-components';

const ScoreAdd = styled.div`
  position: absolute;
  right: 30px;
  // top: 25px;
  color: red;
  font-size: 25px;
  line-height: 25px;
  font-weight: 700;
  color: rgba(119, 110, 101, .9);
  z-index: 10;
  animation: move-up 300ms ease-in;
  animation-fill-mode: both;

  @keyframes move-up {
    0% {
      top: 25px;
      opacity: 1;
    }

    100% {
      top: -50px;
      opacity: 0;
    }
  }
`;

export default ScoreAdd;
