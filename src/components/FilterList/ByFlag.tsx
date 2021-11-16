import React from 'react';
import { useFilterList } from '../../hooks/Feed';
import { For } from '../../lib/controls';
import group from '../../lib/group';
import { alphaAsc } from '../../utils';
import MailFilter from '../../utils/entities/Filter';
import Heading from './Heading';
import List from './List';
import ListItem from './ListItem';
import Summary from './Summary';
import Detail from './Detail';
import Zero from './Zero';

const ByFlag: React.FC<BasicProps> = ({ className, id, style }) => {
  const list = useFilterList();

  const byFlag = React.useMemo(() => (
    group<MailFilter>(list, [
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
  ), [ list ]);
  const keys = React.useMemo(() => (
    Array.from(byFlag.keys()).sort(alphaAsc)
  ), [ byFlag ]);

  return keys.length
    ? (
      <List {...{ className, id, style }}>
        <For of={keys} body={(item: string) => {
          const list = byFlag.get(item);

          return (
            <ListItem key={item || 'n-a'}>
              <Detail title={<Heading>{item || 'N/A'}</Heading>}>
                <List>
                  <For of={list} body={(item: MailFilter) => (
                    <ListItem key={item.id}>
                      { Object.entries(item).reduce((t, [ key, value ]) => {
                        if (key === 'id') { return t; }
                        return t.concat(<Summary key={key} {...{ name: key, value }} />);
                      }, []) }
                    </ListItem>
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

export default ByFlag;
