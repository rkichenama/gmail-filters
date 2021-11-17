import React from 'react';
import { SelectedFiltersContext } from '../data/SelectedFilters';

export const useSelectedFiltersDispatch = () => {
  const { dispatch } = React.useContext(SelectedFiltersContext);
  return dispatch;
};

export const useSelectedFiltersList = () => {
  const { state } = React.useContext(SelectedFiltersContext);
  return state;
};
