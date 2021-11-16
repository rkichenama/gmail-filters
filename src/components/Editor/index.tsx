import React from 'react';
import styled from 'styled-components';
import {} from 'styled-components/cssprop';
import { decamelize } from 'humps';
import Checkbox from './Checkbox';
import Text from './Text';
import Button from '../FilterList/Button';
import MailFilter from '../../utils/entities/Filter';
import Reducer from '../../data/reducer';
import Actions, { loadState, updateState } from './Actions';
import { updateFilters } from '../../data/Feed/actions';
import Heading from '../FilterList/Heading';
import { useFeedDispatch } from '../../hooks/Feed';

const separateWords = (s: string) => decamelize(
  s,
  { separator: ' ' }
);

const baseForm = [ new MailFilter() ];
const prequisites = [ 'from', 'to', 'subject', 'doesNotHaveTheWord', 'hasTheWord', ];
const rules = [ 'shouldArchive', 'shouldMarkAsRead', 'shouldTrash', 'shouldNeverSpam', 'shouldAlwaysMarkAsImportant', 'shouldNeverMarkAsImportant', 'shouldStar', 'label', ];
const Editor = styled(({ className, filters }) => {
  const globalDispatch = useFeedDispatch();
  const [ state, dispatch ] = React.useReducer(Reducer<MailFilter>(Actions), new MailFilter());

  const onChangeFor = React.useCallback((field: string) => (({ target }) => {
    dispatch(updateState({
      [field]: /checkbox/i.test(target.type)
        ? target.checked
        : target.value
    }));
  }) as React.ChangeEventHandler<HTMLInputElement>, [ state ]);
  const enableSubmit = React.useMemo(() => (
    prequisites.some(field => !!state[field]) &&
    rules.some(field => !!state[field])
  ), [ state ]);

  React.useEffect(() => {
    dispatch(loadState(baseForm));
  }, []);
  React.useEffect(() => {
    dispatch(loadState(filters || baseForm));
  }, [ filters ]);

  return (
    <div {...{ className: `${className} as-table`, style: { gridGap: '0.5rem' } }} >
      <section className='w6'>
        <Heading>The filter matches:</Heading>
        <Text {...{
          value: state.from,
          onChange: onChangeFor('from'),
          name: separateWords('from')
        }} />
        <Text {...{
          value: state.to,
          onChange: onChangeFor('to'),
          name: separateWords('to')
        }} />
          <Text {...{
            value: state.subject,
            onChange: onChangeFor('subject'),
            name: separateWords('subject')
          }} />
          <Text {...{
            value: state.doesNotHaveTheWord,
            onChange: onChangeFor('doesNotHaveTheWord'),
            name: separateWords('doesNotHaveTheWord')
          }} />
          <Text {...{
            value: state.hasTheWord,
            onChange: onChangeFor('hasTheWord'),
            name: separateWords('hasTheWord')
          }} />
      </section>
      <section className='w6'>
        <Text {...{
          value: state.label,
          onChange: onChangeFor('label'),
          name: separateWords('applyLabel')
        }} />
        <Heading>Mark the message...</Heading>
        <Checkbox {...{
          label: separateWords('Important'),
          onChange: onChangeFor('shouldAlwaysMarkAsImportant'),
          value: state.shouldAlwaysMarkAsImportant
        }} />
        <Checkbox {...{
          label: separateWords('NeverImportant'),
          onChange: onChangeFor('shouldNeverMarkAsImportant'),
          value: state.shouldNeverMarkAsImportant
        }} />
        <Checkbox {...{
          label: separateWords('Never Spam'),
          onChange: onChangeFor('shouldNeverSpam'),
          value: state.shouldNeverSpam
        }} />
        <Checkbox {...{
          label: separateWords('Read'),
          onChange: onChangeFor('shouldMarkAsRead'),
          value: state.shouldMarkAsRead
        }} />
        <Checkbox {...{
          label: separateWords('Starred'),
          onChange: onChangeFor('shouldStar'),
          value: state.shouldStar
        }} />
        <Checkbox {...{
          label: separateWords('Archived'),
          onChange: onChangeFor('shouldArchive'),
          value: state.shouldArchive
        }} />
        <Checkbox {...{
          label: separateWords('Trash'),
          onChange: onChangeFor('shouldTrash'),
          value: state.shouldTrash
        }} />
      </section>
      <hr className='w12' style={{ width: '85%' }} />
      <Button className='primary x7 w2 material-icons' disabled={!enableSubmit} onClick={
        () => {
          globalDispatch(updateFilters([ state ], filters || []))
        }
      }>save</Button>
      <Button className='x9 w2'>
        Cancel
      </Button>
    </div>
  )
})`
  padding: 1rem;
`;

export default Editor;







