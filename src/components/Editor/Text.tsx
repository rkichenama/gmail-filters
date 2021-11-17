import styled from 'styled-components';
import {} from 'styled-components/cssprop';

const Input = styled.textarea`
  background: hsla(0, 50%, 100%, 0.07);
  width: 100%;
  border: none;
  font-family: 'Work Sans';
  color: #dddddd;
`;

const Label = styled.label`
  display: grid;
  grid-template-columns: 96px 1fr;

  &:nth-child(even) {
    background-color: #131313;
  }

  & + & {
    margin-top: 0.5rem;
  }

  &:hover span {
    color: var(--highlight);
  }
`;

const Field = styled.span`
  font-family: Abel;
  text-transform: capitalize;
  align-self: center;

  &::after {
    content: ':';
  }
`;

const Text = styled(({ className, name, placeholder = name, onChange, value }) => {
  return (
    <Label {...{ className }}>
      <Field>
        { name }
      </Field>
      <Input {...{ type: 'text', placeholder, value, onChange }} />
    </Label>
  );
})``;

export default Text;
