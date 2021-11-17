import { Provider as FeedProvider } from '../../data/Feed';
import { Provider as SelectedFiltersProvider } from '../../data/SelectedFilters';
import FilterList from '../FilterList';
import Editor from '../Editor';
import FileLoader from '../FileLoader';

import './index.scss';

const App = () => (
  <FeedProvider>
    <SelectedFiltersProvider>
      <FileLoader className='x1 y1 h2 w4' />
      <FilterList className='x1 y3 h10 w4' />
      <Editor className='x5 y3 h6 w8' />
      <div className='x9 y1 h2 w4' />
      <div className='x5 y1 h2 w4' />
      <div className='x9 y9 h4 w4' />
      <div className='x5 y9 h4 w4' />
    </SelectedFiltersProvider>
  </FeedProvider>
);
export default App;
