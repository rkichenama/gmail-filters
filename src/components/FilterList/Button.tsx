import styled from 'styled-components';
import {} from 'styled-components/cssprop';

const Button = styled.button`
  font-family: Abel;
  font-weight: bold;
  background: transparent;
  border: none;
  width: 100%;
  padding: 4px 6px;
  cursor: pointer;
  color: white;

  &:not([disabled]).primary,
  &:not([disabled]).primary:hover {
    color: var(--btn-fg);
    background: var(--btn-bg);
  }

  &:not([disabled]):not(.primary):hover {
    font-weight: bold;
    background: hsla(0, 50%, 100%, 0.2);
    color: cyan;
  }

  &[disabled] {
    background: #333333;
  }
`;

export default Button;
