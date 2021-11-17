import { useFilterList } from '../../hooks/Feed';
import { For } from '../../lib/controls';
import MailFilter from '../../utils/entities/Filter';
import List from './List';
import Filter from './Filter';
import Zero from './Zero';


const Ungrouped: React.FC<BasicProps> = ({ className, id, style }) => {
  const list = useFilterList();

  return list.length
    ? (
      <List {...{ className, id, style }}>
        <For of={list} body={(item: MailFilter) => (
          <Filter key={item.id} {...{ item }} />
        )} />
      </List>
    )
    : (<Zero {...{ className, id, style }} />);
};

export default Ungrouped;


