import { useFilterList } from '../../hooks/Feed';
import { For } from '../../lib/controls';
import MailFilter from '../../utils/entities/Filter';
import List from './List';
import ListItem from './ListItem';
import Summary from './Summary';
import Zero from './Zero';

const Ungrouped: React.FC<BasicProps> = ({ className, id, style }) => {
  const list = useFilterList();

  return list.length
    ? (
      <List {...{ className, id, style }}>
        <For of={list} body={(item: MailFilter) => (
          <ListItem key={item.id}>
            { Object.entries(item).reduce((t, [ key, value ]) => {
              if (key === 'id') { return t; }
              return t.concat(<Summary key={key} {...{ name: key, value }} />);
            }, []) }
          </ListItem>
        )} />
      </List>
    )
    : (<Zero {...{ className, id, style }} />);
};

export default Ungrouped;
