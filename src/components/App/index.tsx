import React from 'react';
import { Provider } from '../../data/Feed';
import { useFeedAuthor, useFeedDispatch } from '../../hooks/Feed';
import FilterList from '../FilterList';
import Editor from '../Editor';
import FileLoader from '../FileLoader';

import './index.scss';

const App = () => (
  <Provider>
    <FileLoader className='x1 y1 h2 w4' />
    <FilterList className='x1 y3 h10 w4' />
    <Editor className='x5 y3 h6 w8' />
  </Provider>
);
export default App;
