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

const separateWords = (s: string) => decamelize(
  s,
  { separator: ' ' }
);

const baseForm = [ new MailFilter() ];
const Editor = styled(({ className, filters }) => {
  const [ state, dispatch ] = React.useReducer(Reducer<MailFilter>(Actions), new MailFilter());

  const onChangeFor = React.useCallback((field: string) => (({ target }) => {
    dispatch(updateState({
      [field]: /checkbox/i.test(target.type)
        ? target.checked
        : target.value
    }));
  }) as React.ChangeEventHandler<HTMLInputElement>, [ state ]);
  React.useEffect(() => {
    dispatch(loadState(baseForm));
  }, []);
  React.useEffect(() => {
    dispatch(loadState(filters || baseForm));
  }, [ filters ]);

  return (
    <div {...{ className: `${className} as-table`, style: { gridGap: '0.5rem' } }} >
      <section className='w6'>
        <Text {...{
          value: state.label,
          onChange: onChangeFor('label'),
          name: separateWords('label')
        }} />
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
        <div>
          The filter...
        </div>
        <Checkbox {...{
          label: separateWords('shouldAlwaysMarkAsImportant'),
          onChange: onChangeFor('shouldAlwaysMarkAsImportant'),
          value: state.shouldAlwaysMarkAsImportant
        }} />
        <Checkbox {...{
          label: separateWords('shouldArchive'),
          onChange: onChangeFor('shouldArchive'),
          value: state.shouldArchive
        }} />
        <Checkbox {...{
          label: separateWords('shouldMarkAsRead'),
          onChange: onChangeFor('shouldMarkAsRead'),
          value: state.shouldMarkAsRead
        }} />
        <Checkbox {...{
          label: separateWords('shouldNeverMarkAsImportant'),
          onChange: onChangeFor('shouldNeverMarkAsImportant'),
          value: state.shouldNeverMarkAsImportant
        }} />
        <Checkbox {...{
          label: separateWords('shouldNeverSpam'),
          onChange: onChangeFor('shouldNeverSpam'),
          value: state.shouldNeverSpam
        }} />
        <Checkbox {...{
          label: separateWords('shouldStar'),
          onChange: onChangeFor('shouldStar'),
          value: state.shouldStar
        }} />
        <Checkbox {...{
          label: separateWords('shouldTrash'),
          onChange: onChangeFor('shouldTrash'),
          value: state.shouldTrash
        }} />
      </section>
      <hr className='w12' style={{ width: '85%' }} />
      <Button className='x7 w2'>
        Save
      </Button>
      <Button className='x9 w2'>
        Cancel
      </Button>
    </div>
  )
})`
  padding: 1rem;
`;

export default Editor;







