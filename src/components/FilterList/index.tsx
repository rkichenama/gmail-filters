import { useFilterList } from '../../hooks/Feed';
import { For } from '../../lib/controls';
import MailFilter from '../../utils/entities/Filter';
import group from '../../lib/group';

const FilterList: React.FC<BasicProps> = ({ className, id, style }) => {
  const list = useFilterList();

  const byLabel = group<MailFilter>(list, [ 'label' ]);
  const byFrom = group<MailFilter>(list, [ 'from' ]);
  const byTo = group<MailFilter>(list, [ 'to' ]);
  const byHasWord = group<MailFilter>(list, [ 'hasTheWord' ]);
  const byHasNotWord = group<MailFilter>(list, [ 'doesNotHaveTheWord' ]);
  const byFlag = group<MailFilter>(list, [
    (filter) => (
      Object.entries(filter)
        .reduce((t, [ key, value ]) => {
          if (/^should/i.test(key) && value) {
            t.push(key);
          }
          return t;
        }, [])
    )
  ])
  console.log(
    byFrom
  )

  return (
    <ul {...{ className, id, style }}>
      <For of={list} body={(item: MailFilter) => (
        <li key={item.id}>
          { Object.entries(item).reduce((t, [ key, value ]) => {
            if (key === 'id') { return t; }
            return `${t} (${key} is ${value})`;
          }, '')}
        </li>
      )} />
    </ul>
  )
};

export default FilterList;
