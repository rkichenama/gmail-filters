import React from 'react';
import styled from 'styled-components';
import {} from 'styled-components/cssprop';
import { SelectedFiltersContext } from '../../data/SelectedFilters';
import { addToSelectedFilters, removeFromSelectedFilters } from '../../data/SelectedFilters/actions';
import { separateWords, fauxShadowStyle } from '../../utils';
import MailFilter from '../../utils/entities/Filter';
import ListItem from './ListItem';
import { useFeedDispatch } from '../../hooks/Feed';
import { removeFilters } from '../../data/Feed/actions';

const Flag = styled.span`
  display: inline-block;
  padding: 2px 3px;
  border: 1px solid black;
  box-shadow: inset 0 0 2px white;
  background: darkcyan;
  color: var(--highlight);
  ${fauxShadowStyle}
  text-transform: capitalize;

  &:not(:only-child) {
    &:not(:first-child) {
      margin-left: 0.2em;
    }
  }
`;
const BooleanValue = ({ field, value }) => (
  value
    ? <Flag>{separateWords(field.replace(/^should/, '').replace(/MarkAs/, ''))}</Flag>
    : null
);

const UserText = {
  Container: styled.article`
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;

    &:not(:first-child) {
      margin-top: 4px;
    }
  `,
  Field: styled.aside`
    color: var(--highlight);
    ${fauxShadowStyle}
    text-transform: capitalize;
  `,
  Value: styled.main`
  `
}
const TextValue = ({ field, value }) => (
  value
    ? (
      <UserText.Container>
        <UserText.Field>{ separateWords(field) }</UserText.Field>
        <UserText.Value>{ value }</UserText.Value>
      </UserText.Container>
    )
    : null
);

const Close = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
  font-size: 1rem;
  line-height: 1rem;
  background-color: transparent;
  border-radius: 50%;
  opacity: 0.2;
  transition: background-color 0.2s ease-in-out, opacity 0.2s ease-in-out;

  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -0.8rem;

  &:hover {
    background-color: red;
    opacity: 1;
  }

  &::before {
    content: 'close';
    font-family: 'Material Icons';
    ${fauxShadowStyle}
  }
`;

const Filter = styled(({ className, item }: { className?: string, item: MailFilter }) => {
  const feedDispatch = useFeedDispatch();
  const { state, dispatch } = React.useContext(SelectedFiltersContext);

  const isSelected = React.useMemo(() => (
    state.some(({ id }) => id === item.id)
  ), [ state, item ]);

  const remove = React.useCallback(evt => {
    evt.stopPropagation();
    evt.preventDefault();
    feedDispatch(removeFilters([ item ]));
  }, [ feedDispatch ]);
  const onClick = React.useCallback(() => {
    dispatch(
      (isSelected ? removeFromSelectedFilters : addToSelectedFilters)([ item.id ])
    );
  }, [ dispatch, item, isSelected ]);

  const [ flags, texts ] = React.useMemo(() => (
    Object.entries(item)
      .reduce(([ flags, texts ], [ field, value ]) => {
        (/^should/.test(field) ? flags : texts).push([ field, value ]);
        return [ flags, texts ];
      }, [ [], [] ])
  ), [ item ]);

  return (
    <ListItem data-selected={isSelected} {...{ className, onClick }}>
      { texts.reduce((t, [ field, value ]) => {
        if (/(id|title|size)/.test(field)) { return t; }
        return t.concat(
          <TextValue key={field} {...{
            field: field.replace(/^smartLabel/, 'cagetgory'),
            value
          }} />
        );
      }, []) }
      <UserText.Container>
        <UserText.Field />
        <UserText.Value>
          { flags.reduce((t, [ field, value ]) => {
            if (/(id|title|size)/.test(field)) { return t; }
            return t.concat(
              <BooleanValue key={field} {...{
                field: field.replace(/^smartLabel/, 'cagetgory'),
                value
              }} />
            );
          }, []) }
        </UserText.Value>
      </UserText.Container>
      <Close onClick={remove} />
    </ListItem>
  );
})`
  border-color: hsla(0, 50%, 100%, 0.15);
  transition: border-color 0.2s ease-in-out, background 0.2s ease-in-out;

  &:not([data-selected="true"]):hover {
    border-color: hsla(0, 50%, 100%, 1);
  }
  &[data-selected="true"] {
    border-color: var(--highlight);
    background: hsla(60, 50%, 50%, 0.2);
  }
`;

export default Filter;
