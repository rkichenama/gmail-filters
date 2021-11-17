import React from 'react';
import styled from 'styled-components';
import {} from 'styled-components/cssprop';
import Checkbox from './Checkbox';
import Text from './Text';
import Button from '../FilterList/Button';
import MailFilter from '../../utils/entities/Filter';
import Reducer from '../../data/reducer';
import Actions, { loadState, updateState } from './Actions';
import { updateFilters } from '../../data/Feed/actions';
import Heading from '../FilterList/Heading';
import { useFeedDispatch } from '../../hooks/Feed';
import { useSelectedFiltersDispatch, useSelectedFiltersList } from '../../hooks/SelectedFilters';
import { clearSelectedFilters } from '../../data/SelectedFilters/actions';
import { separateWords } from '../../utils';

const defaultState = {
  from: '',
  to: '',
  subject: '',
  doesNotHaveTheWord: '',
  hasTheWord: '',
  label: '',
  shouldArchive: false,
  shouldMarkAsRead: false,
  shouldTrash: false,
  shouldNeverSpam: false,
  shouldAlwaysMarkAsImportant: false,
  shouldNeverMarkAsImportant: false,
  shouldStar: false
};
const baseForm = [ MailFilter.basedOn(defaultState) ];
const prequisites = [ 'from', 'to', 'subject', 'doesNotHaveTheWord', 'hasTheWord' ];
const rules = [
  'shouldArchive', 'shouldMarkAsRead', 'shouldTrash', 'shouldNeverSpam',
  'shouldAlwaysMarkAsImportant', 'shouldNeverMarkAsImportant', 'shouldStar',
  'label', 'forwardTo'
];

const Fieldset = styled.fieldset`
  border-color: #333333;

  legend {
    color: var(--highlight);
  }
`;
const MultipleColumns = styled.section`
  column-count: 2;

  @media(max-width: 960px) {
    column-count: 1;
  }
`;

const Editor = styled(({ className }) => {
  const feedDispatch = useFeedDispatch();
  const selectedDispatch = useSelectedFiltersDispatch();
  const filters = useSelectedFiltersList();
  const [ state, localDispatch ] = React.useReducer(Reducer<MailFilter>(Actions), new MailFilter());

  const onChangeFor = React.useCallback((field: string) => (({ target }) => {
    localDispatch(updateState({
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
    localDispatch(loadState(baseForm));
  }, []);
  React.useEffect(() => {
    localDispatch(loadState([ MailFilter.basedOn(defaultState) ]));
    if (filters.length) {
      localDispatch(loadState(filters));
    }
  }, [ filters ]);

  return (
    <div {...{ className: `${className}`, style: { gridGap: '0.5rem' } }} >
      <section className='as-table scrollable-y' style={{ height: '100%' }}>
        <div className='w12 h10 as-table'>
          <section className='w6'>
            <Fieldset>
              <legend>Matching Criteria</legend>
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
                name: separateWords('doesNotHaveTheWord(s)')
              }} />
              <Text {...{
                value: state.hasTheWord,
                onChange: onChangeFor('hasTheWord'),
                name: separateWords('hasTheWord(s)')
              }} />
            </Fieldset>
          </section>
          <section className='w6'>
            <Fieldset>
              <legend>Send the message...</legend>
              <Text {...{
                value: state.label,
                onChange: onChangeFor('label'),
                name: separateWords('applyLabel')
              }} />
              <Text {...{
                value: state.smartLabelToApply,
                onChange: onChangeFor('smartLabelToApply'),
                name: separateWords('category')
              }} />
              <Text {...{
                value: state.forwardTo,
                onChange: onChangeFor('forwardTo'),
                name: separateWords('forwardTo')
              }} />
            </Fieldset>
            <Fieldset>
              <legend>Mark the message...</legend>
              <MultipleColumns>
                <Checkbox {...{
                  label: separateWords('Important'),
                  onChange: onChangeFor('shouldAlwaysMarkAsImportant'),
                  checked: state.shouldAlwaysMarkAsImportant
                }} />
                <Checkbox {...{
                  label: separateWords('NeverImportant'),
                  onChange: onChangeFor('shouldNeverMarkAsImportant'),
                  checked: state.shouldNeverMarkAsImportant
                }} />
                <Checkbox {...{
                  label: separateWords('Never Spam'),
                  onChange: onChangeFor('shouldNeverSpam'),
                  checked: state.shouldNeverSpam
                }} />
                <Checkbox {...{
                  label: separateWords('Read'),
                  onChange: onChangeFor('shouldMarkAsRead'),
                  checked: state.shouldMarkAsRead
                }} />
                <Checkbox {...{
                  label: separateWords('Starred'),
                  onChange: onChangeFor('shouldStar'),
                  checked: state.shouldStar
                }} />
                <Checkbox {...{
                  label: separateWords('Archived'),
                  onChange: onChangeFor('shouldArchive'),
                  checked: state.shouldArchive
                }} />
                <Checkbox {...{
                  label: separateWords('Trash'),
                  onChange: onChangeFor('shouldTrash'),
                  checked: state.shouldTrash
                }} />
              </MultipleColumns>
            </Fieldset>
          </section>
        </div>
        <hr className='w12' style={{ width: '85%' }} />
        <Button className='primary x7 w2 material-icons' disabled={!enableSubmit}
          onClick={() => {
            feedDispatch(updateFilters([ state ], filters || []));
            selectedDispatch(clearSelectedFilters());
          }}
        >save</Button>
        <Button className='x10 w2'
          onClick={() => {
            if (filters.length) {
              selectedDispatch(clearSelectedFilters());
            } else {
              localDispatch(loadState([ MailFilter.basedOn(defaultState) ]));
            }
          }}
        >
          Cancel
        </Button>
      </section>
    </div>
  )
})`
  padding: 1rem;
`;

export default Editor;







