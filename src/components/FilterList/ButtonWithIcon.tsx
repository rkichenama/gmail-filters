import styled from 'styled-components';
import {} from 'styled-components/cssprop';
import Button from './Button';

const ButtonWithIcon = styled((props) => (
  <Button {...props} />
))`
  font-family: 'Material Icons Sharp';
  font-size: 1.2rem;
  font-weight: 400;
`;

export default ButtonWithIcon;
