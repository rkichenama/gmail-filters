import React from 'react';
import { useFilterList } from '../../hooks/Feed';
import { For } from '../../lib/controls';
import group from '../../lib/group';
import { alphaAsc } from '../../utils';
import MailFilter from '../../utils/entities/Filter';
import Heading from './Heading';
import List from './List';
import ListItem from './ListItem';
import Filter from './Filter';
import Detail from './Detail';
import Zero from './Zero';

const ByLabel: React.FC<BasicProps> = ({ className, id, style }) => {
  const list = useFilterList();

  const byLabel = React.useMemo(() => (
    group<MailFilter>(list, [ 'label' ])
  ), [ list ]);
  const keys = React.useMemo(() => (
    Array.from(byLabel.keys())
      .filter(k => k)
      .sort(alphaAsc)
  ), [ byLabel ]);

  return keys.length
    ? (
      <List {...{ className, id, style }}>
        <For of={keys} body={(item: string) => {
          const list = byLabel.get(item);

          return (
            <ListItem key={item}>
              <Detail title={<Heading>{item || 'N/A'}</Heading>}>
                <List>
                  <For of={list} body={(item: MailFilter) => (
                    <Filter key={item.id} {...{ item }} />
                  )} />
                </List>
              </Detail>
            </ListItem>
          )
        }} />
      </List>
    )
    : (<Zero {...{ className, id, style }} />);
};

export default ByLabel;
