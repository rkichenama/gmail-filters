import React from 'react';
import styled from 'styled-components';
import {} from 'styled-components/cssprop';
import { useFilterList } from '../../hooks/Feed';

const Row = styled.section`
  display: grid;
  grid-template-columns: 4fr 1fr;
  align-items: center;
  padding: 0 4px;
`;
const Cell = styled.div`
  font-variant-numeric: oldstyle-nums slashed-zero

  &:last-child {
    justify-self: self-end;
  };
`;

const Dash = styled(({ className, label, count }) => {
  return (
    <Row {...{ className }}>
      <Cell>{ label }</Cell>
      <Cell>{ count }</Cell>
    </Row>
  );
})`
  ${props => props.count ? '' : 'display: none;'}
`;

const Dashboard = styled(({ className }) => {
  const filters = useFilterList();

  const { pulled, changed } = React.useMemo(() => ({
    pulled: filters.filter(({ id }) => !/^GMF_/.test(id)).length,
    changed: filters.filter(({ id }) => /^GMF_/.test(id)).length,
  }), [ filters ]);

  return (
    <div {...{ className }}>
      {
        filters.length
        ? (
          <>
            <Dash {...{ label: 'pulled', count: pulled }} />
            <Dash {...{ label: 'edited', count: changed }} />
          </>
        )
        : null
      }
    </div>
  );
})``;

export default Dashboard;
