import styled from 'styled-components';
import {} from 'styled-components/cssprop';

const Input = styled.textarea`
  resize: vertical;
  background: hsla(0, 50%, 100%, 0.07);
  width: 100%;
  border: 1px solid var(--border-color);
  font-family: 'Fira Code';
  color: #dddddd;

  &:focus-visible {
    outline: none;
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

const Label = styled.label`
  --border-color: transparent;
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

  &[data-invalid="true"] {
    --border-color: red;
  }
`;


const Text = styled(({
  className, name, onChange, value,
  hasError = false,
  placeholder = name,
}) => {
  return (
    <Label {...{ className, 'data-invalid': hasError }}>
      <Field>
        { name }
      </Field>
      <Input {...{ type: 'text', placeholder, value, onChange }} />
    </Label>
  );
})``;

export default Text;
