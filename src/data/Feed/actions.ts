import Feed from '../../utils/entities/Feed';
import MailFilter from '../../utils/entities/Filter';
import omit from 'lodash/omit';


const parser = new DOMParser();

export default {
  fromString (_, { xml }) {
    var doc = parser.parseFromString(xml as string, 'application/xml');
    return new Feed(doc);
  },
  updateFilters (state, { remove, add }) {
    let filters = omit({ ...state.filters }, (
      (remove as MailFilter[]).map(({ id }) => id)
    ));
    (add as MailFilter[]).forEach(filter => {
      filters[filter.id] = filter;
    });

    return Feed.basedOn({
      ...state,
      filters
    });
  },
} as Record<string, (state: Feed, action: any) => Feed>;

export const fromString = (xml: string) => ({
  type: 'fromString',
  xml
});

export const updateFilters = (add: MailFilter[], remove: MailFilter[]) => ({
  type: 'updateFilters',
  add, remove
})
