import React from 'react';
import { Provider } from '../../data/Feed';
import { useFeedAuthor, useFeedDispatch } from '../../hooks/Feed';
import FilterList from '../FilterList';

import './index.scss';

const GmailFilter = ({}) => {
  const dispatch = useFeedDispatch();
  const author = useFeedAuthor();

  React.useEffect(() => {
    document.body.classList.remove('loading');
  }, []);

  return (
    <main className='w6 h2'>
      <input type="file" onChange={
        (evt) => {
          evt.preventDefault();
          const xmlFile = evt.target.files[0];
          var reader = new FileReader();
          reader.onload = ({ target: { result: xml } }) => {
            dispatch({ type: 'fromString', xml })
          }
          reader.readAsText(xmlFile);
        }
      } />
      <pre>
        <code>
          { author && author.toString() }
        </code>
      </pre>
    </main>
  );
};

const App = () => (
  <Provider>
    <GmailFilter />
    <FilterList className='x1 h6 w4 scrollable-y' />
  </Provider>
);
export default App;
