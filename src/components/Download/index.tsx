import React from 'react';
import styled from 'styled-components';
import {} from 'styled-components/cssprop';
import { useFeed } from '../../hooks/Feed';
import Feed from '../../utils/entities/Feed';
import ButtonWithIcon from '../FilterList/ButtonWithIcon';

const saveCurrentFeed= (current: Feed) => {
  // attempt to create a download json file
  const element = document.createElement('a');
  element.setAttribute(
    'href',
    `data:text/json;charset=utf-8,${
      encodeURIComponent(
        current.toString()
      )
    }`
  );
  element.setAttribute('download', 'updated filters.xml');
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  element.remove();
};

const Download = styled(({ className }) => {
  const feed = useFeed();

  const onClick = React.useCallback(() => {
    saveCurrentFeed(feed);
  }, [ feed ]);

  return (
    <div {...{ className }}>
      <ButtonWithIcon {...{ onClick }} >file_download</ButtonWithIcon>
    </div>
  );
})`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 40%;
    height: 40%;
    border-radius: 20% 20% 20% 20% / 40% 40% 40% 40%;
    font-size: 2.4rem;
  }
`;

export default Download;
