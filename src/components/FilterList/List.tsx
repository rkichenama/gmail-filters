import styled from 'styled-components';
import {} from 'styled-components/cssprop';

const List = styled.ul`
  position: relative;
  margin: 0;
  padding: 0;
  list-style-type: none;

  & & {
    margin-left: 1rem;
  }
`;

export default List;
