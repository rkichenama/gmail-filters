import styled from 'styled-components';
import {} from 'styled-components/cssprop';

const Button = styled.button`
  font-family: "Abel";
  background: transparent;
  border: none;
  width: 100%;
  padding: 4px 6px;
  cursor: pointer;
  color: white;

  &:hover {
    font-weight: bold;
    background: hsla(0, 50%, 100%, 0.2);
    color: cyan;
  }
`;

export default Button;
