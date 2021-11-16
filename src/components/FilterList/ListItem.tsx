import styled from 'styled-components';
import {} from 'styled-components/cssprop';

const Li = styled.li`
  position: relative;
  margin: 0;
  display: block;
  border: 1px solid;
  padding: 2px;

  &:not(:first-child) {
    margin-top: 3px;
  }
`;

export default Li;
