import React from 'react';
import { FeedContext } from '../data/Feed';

export const useFeedDispatch = () => {
  const { dispatch } = React.useContext(FeedContext);
  return dispatch;
};

export const useFeedAuthor = () => {
  const { state: { author = undefined } = {} } = React.useContext(FeedContext);
  return author;
};

export const useFilterList = () => {
  const { state: { filters = {} } = {} } = React.useContext(FeedContext);
  return Object.values(filters);
};

export const useFilterDictionary = () => {
  const { state: { filters = {} } = {} } = React.useContext(FeedContext);
  return filters;
};
