import uniqBy from 'lodash/uniqBy';
import MailFilter from '../../utils/entities/Filter';

export default {
  append (state, { selected }) {
    return uniqBy<MailFilter>(
      [ ...state, ...(selected as MailFilter[]) ],
      'id'
    );
  },
  remove (state, { ids }) {
    return state.filter(({ id }) => !(ids as string[]).includes(id));
  },
  reset (_, __) {
    return [] as MailFilter[];
  }
} as Record<string, (state: MailFilter[], action: any) => MailFilter[]>;

export const addToSelectedFilters = (ids: string[]) => ({
  type: 'append',
  selected: ids
});

export const removeFromSelectedFilters = (ids: string[]) => ({
  type: 'remove',
  ids
});

export const clearSelectedFilters = () => ({ type: 'reset' });
