import styled from 'styled-components';
import {} from 'styled-components/cssprop';

const Zero = styled(({ className }) => (
  <section {...{ className }} >
    There are no filters loaded
  </section>
))`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Zero;
