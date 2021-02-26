import React from 'react';
import styled from 'styled-components';
import { cellsType } from '../../types';

const calculateSaturation = (step: number): number => Math.floor(100 / 16 * step);

const calculateLightness = (step: number): number => 100 - Math.floor(50 / 16 * step);

const calculateBackgroundColor = (value: number): string => {
  if (value === 0) {
    return 'transparent'
  }
  // from 0 to 16
  const step = Math.min(16, Math.log2(value))
  return `hsl(0, ${calculateSaturation(step)}%, ${calculateLightness(step)}%);`
};

const FieldTag = styled.div`
  width: 475px;
  height: 475px;
  position: relative;
`;

const Background = styled.div`
  padding: 5px;
  width: 450px;
  height: 450px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  background-color: #bbada0;
  border-radius: 10px;
  position: absolute;
`;

const Playground = styled(Background)`
  background-color: transparent;
`;

const BackgroundCell = styled.div`
  margin: 5px;
  height: 100px;
  width: 100px;
  border-radius: 5px;
  background-color: rgba(238, 228, 218, 0.35);
`;

const Cell = styled(BackgroundCell) <{ x: number, y: number, value: number }>`
  transform: translate(${({ x }) => x * 110}px, ${({ y }) => y * 110}px);
  text-align: center;
  line-height: 100px;
  background-color: ${({ value }) => calculateBackgroundColor(value)};
  position: absolute;
  transition-property: transform;
  transition: 100ms ease-in-out;
  color: #6a4e4e;
  font-weight: 900;
  font-size: ${({ value }) =>
    /* eslint no-nested-ternary: 0 */
    value < 100 ? 66
      : value < 1000 ? 47
        : value < 10000 ? 40
          : 30}px;
`;

interface FieldProps {
  cells: Array<cellsType>;
}

const Field: React.FC<FieldProps> = ({ cells }) => {
  const inc = 1;
  return (
    <>
      <FieldTag>
        <Background>
          {/* prettier-ignore */
            Array
              .from(new Array(16), (_, i) => i)
              .map(i =>
                <BackgroundCell key={i} />
              )}
        </Background>
        <Playground>
          {cells.map(({ x, y, value, id }) => (
            <Cell key={id} x={x} y={y} value={value + inc}>
              {value}
            </Cell>
          ))}
        </Playground>
      </FieldTag>
    </>
  );
};

export default Field;
