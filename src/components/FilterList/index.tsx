import React from 'react';
import styled from 'styled-components';
import {} from 'styled-components/cssprop';
import { useFilterList } from '../../hooks/Feed';
import MailFilter from '../../utils/entities/Filter';
import group from '../../lib/group';
import { If, Otherwise } from '../../lib/controls';
import Button from './Button';
import Ungrouped from './Ungrouped';
import ByLabel from './ByLabel';
import ByFlag from './ByFlag';

enum Tabs {
  Ungrouped,
  ByLabel,
  ByFlag,
  BySender,
  ByRecipient
};

const activeStyle = {
  color: 'var(--highlight)',
  bgColor: 'hsla(0, 50%, 100%, 0.4)'
};

const FilterList = styled(({ className, id, style }) => {
  const [ activeTab, setActiveTab ] = React.useState(Tabs.Ungrouped);

  // const list = useFilterList();
  // const byLabel = group<MailFilter>(list, [ 'label' ]);
  // const byFrom = group<MailFilter>(list, [ 'from' ]);
  // const byTo = group<MailFilter>(list, [ 'to' ]);
  // const byHasWord = group<MailFilter>(list, [ 'hasTheWord' ]);
  // const byHasNotWord = group<MailFilter>(list, [ 'doesNotHaveTheWord' ]);
  // const byFlag = group<MailFilter>(list, [
  //   (filter) => (
  //     Object.entries(filter)
  //       .reduce((t, [ key, value ]) => {
  //         if (/^should/i.test(key) && value) {
  //           t.push(key);
  //         }
  //         return t;
  //       }, [])
  //   )
  // ])


  return (
    <section {...{ className: `${className} as-grid`, id, style }} >
      <div className='w12 h1 flex align-between' >
        <Button style={activeTab === Tabs.Ungrouped ? activeStyle : undefined} onClick={() => setActiveTab(Tabs.Ungrouped)}>Ungrouped</Button>
        <Button style={activeTab === Tabs.ByLabel ? activeStyle : undefined} onClick={() => setActiveTab(Tabs.ByLabel)}>By Folder</Button>
        <Button style={activeTab === Tabs.ByFlag ? activeStyle : undefined} onClick={() => setActiveTab(Tabs.ByFlag)}>By Flag</Button>
        {/* <Button style={activeTab === Tabs.BySender ? activeStyle : undefined} onClick={() => setActiveTab(Tabs.BySender)}>By From</Button>
        <Button style={activeTab === Tabs.ByRecipient ? activeStyle : undefined} onClick={() => setActiveTab(Tabs.ByRecipient)}>By To</Button> */}
      </div>
      <If condition={activeTab === Tabs.Ungrouped}>
        <Ungrouped className='w12 h11 scrollable-y' />
        <Otherwise>
          <If condition={activeTab === Tabs.ByLabel}>
            <ByLabel className='w12 h11 scrollable-y' />
            <Otherwise>
              <If condition={activeTab === Tabs.ByFlag}>
                <ByFlag className='w12 h11 scrollable-y' />
                {/* <Otherwise>

                </Otherwise> */}
              </If>
            </Otherwise>
          </If>
        </Otherwise>
      </If>
    </section>
  );
})`
  min-width: 240px;
`;

export default FilterList;
