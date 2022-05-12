import styled from 'styled-components';

interface SeparatorProps {
  times?: number;
}
const Separator = styled.div<SeparatorProps>`
  min-width: 20px;
  margin: ${({ times = 1 }) => `0 0 ${times * 10}px`};

  &::after {
    display: table;

    clear: both;
    content: '';
  }
`;

export default Separator;
