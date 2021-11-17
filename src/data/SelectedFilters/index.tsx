import React from 'react';
import MailFilter from '../../utils/entities/Filter';
import Actions from './actions';
import Reducer from '../reducer';
import { useFilterDictionary } from '../../hooks/Feed';

const defaultState = [] as MailFilter[];

export const SelectedFiltersContext = React.createContext({
  state: defaultState,
  dispatch: (() => {}) as Function
});

export const Provider = ({ children }) => {
  const filters = useFilterDictionary();
  const [ state, dispatch ] = React.useReducer(Reducer<MailFilter[]>(Actions), defaultState);

  const wrappedDispatch = React.useCallback(({ selected, ...rest }) => {
    dispatch({
      ...rest,
      selected: selected ? selected.map(id => filters[id]) : undefined
    });
  }, [ dispatch, filters ]);

  return (
    <SelectedFiltersContext.Provider value={{ state, dispatch: wrappedDispatch }}>
      { children }
    </SelectedFiltersContext.Provider>
  )
};
Provider.displayName = 'SelectedFiltersProvider';
