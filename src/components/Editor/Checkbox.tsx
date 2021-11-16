import styled from 'styled-components';
import {} from 'styled-components/cssprop';

const Input = styled.input`
  display: inline-block;
  margin: 0;
  margin-right: 1.2rem;
  padding: 0;
  height: 1rem;
  width: 0;

  &:before,
  &:after {
    position: absolute;
    left: 0;
    top: 0;
    width: 1em;
    height: 1em;
    margin-top: 0.2em;
    border: 1px solid transparent;

    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 1em;
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: 'liga';
  }

  &:before {
    content: '';
  }

  &:after {
    content: 'radio_button_unchecked';
    border-color: transparent;
    color: hsla(0, 50%, 100%, 0.15);
  }
  &:checked:after {
    content: 'task_alt';
    color: var(--highlight);
  }
`;

const Label = styled.label`
  display: block;

  &:hover {
    color: var(--highlight);
  }
  &:nth-child(even) {
    background-color: #131313;
  }

  & + & {
    margin-top: 0.5rem;
  }
`;

const Checkbox = styled(({ className, label, onChange, value }) => {
  return (
    <Label {...{ className }}>
      <Input type='checkbox' {...{ onChange, value }} />
      { label }
    </Label>
  );
})``;

export default Checkbox;
