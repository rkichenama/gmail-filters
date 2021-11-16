import styled from 'styled-components';
import {} from 'styled-components/cssprop';

const Summary = styled(({ className, name, value }) => {
  return (
    <span {...{ className }}>
      (<span className='highlight'>{name}</span> is {`${value}`})
    </span>
  )
})`
  display: inline-block;
  word-break1: break-all;

  &:not(:only-child):not(:last-child)::after {
    content: ',';
  }
`;

export default Summary;
