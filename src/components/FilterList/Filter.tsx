import React from 'react';
import styled from 'styled-components';
import {} from 'styled-components/cssprop';
import { SelectedFiltersContext } from '../../data/SelectedFilters';
import { addToSelectedFilters, removeFromSelectedFilters } from '../../data/SelectedFilters/actions';
import MailFilter from '../../utils/entities/Filter';
import ListItem from './ListItem';
import Summary from './Summary';

const Filter = styled(({ className, item }: { className?: string, item: MailFilter }) => {
  const { state, dispatch } = React.useContext(SelectedFiltersContext);

  const isSelected = React.useMemo(() => (
    state.some(({ id }) => id === item.id)
  ), [ state, item ]);

  const onClick = React.useCallback(() => {
    dispatch(
      (isSelected ? removeFromSelectedFilters : addToSelectedFilters)([ item.id ])
    );
  }, [ dispatch, item, isSelected ]);

  return (
    <ListItem data-selected={isSelected} {...{ className, onClick }}>
      {Object.entries(item).reduce((t, [ key, value ]) => {
        if (key === 'id') { return t; }
        return t.concat(<Summary key={key} {...{ name: key, value }} />);
      }, [])}
    </ListItem>
  );
})`
  transition: border-color 0.2s ease-in-out, background 0.2s ease-in-out;

  &[data-selected="true"] {
    border-color: var(--highlight);
    background: hsla(60, 50%, 50%, 0.2);
  }
`;

export default Filter;
