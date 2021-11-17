import MailFilter from '../../utils/entities/Filter';

export default {
  loadState: (_, { filters }) => {
    const [ first, ...rest ] = (filters as MailFilter[]);
    const state = rest
      .reduce((t, c) => {
        Object.entries(c)
          .forEach(([ key, value ]) => {
            if (!t[key]) {
              t[key] = value;
            } else if (/boolean/i.test(typeof value)) {
              t[key] ||= value;
            } else {
              t[key] += ` OR ${value}`;
            }
          });
        return t;
      }, { ...first } as MailFilter);
    return state;
  },
  updateState: (state, { changes }) => ({
    ...state,
    ...changes
  } as MailFilter)
} as Record<string, (state: MailFilter, action: any) => MailFilter>;

export const loadState = (filters: MailFilter[]) => ({
  type: 'loadState',
  filters
});

export const updateState = (changes: Partial<MailFilter>) => ({
  type: 'updateState',
  changes
});