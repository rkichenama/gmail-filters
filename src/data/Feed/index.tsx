import React from 'react';
import Feed from '../../utils/entities/Feed';
import Actions from './actions';
import Reducer from '../reducer';

const defaultState = {} as Feed;

export const FeedContext = React.createContext({
  state: defaultState,
  dispatch: (() => {}) as Function
});

export const Provider = ({ children }) => {
  const [ state, dispatch ] = React.useReducer(Reducer<Feed>(Actions), defaultState);
  return (
    <FeedContext.Provider value={{ state, dispatch }}>
      { children }
    </FeedContext.Provider>
  )
};