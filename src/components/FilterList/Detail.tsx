import styled from 'styled-components';
import {} from 'styled-components/cssprop';

const Detail = styled.details`
`;

const Summary = styled.summary`
`;

const Details = ({ title, children, ...rest })  => (
  <Detail {...rest}>
    <Summary>{title}</Summary>
    <section style={{ display: 'contents' }}>
      { children }
    </section>
  </Detail>
);

export default Details;
