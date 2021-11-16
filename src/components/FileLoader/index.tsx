import React from 'react';
import styled from 'styled-components';
import {} from 'styled-components/cssprop';
import { useFeedAuthor, useFeedDispatch } from '../../hooks/Feed';
import { fromString } from '../../data/Feed/actions';

const FileLoader = styled(({ className }) => {
  const dispatch = useFeedDispatch();
  const author = useFeedAuthor();

  React.useEffect(() => {
    document.body.classList.remove('loading');
  }, []);

  return (
    <section {...{ className }} >
      <input type="file" onChange={
        (evt) => {
          evt.preventDefault();
          const xmlFile = evt.target.files[0];
          var reader = new FileReader();
          reader.onload = ({ target: { result: xml } }) => {
            dispatch(fromString(xml as string))
          }
          reader.readAsText(xmlFile);
        }
      } />
      <div style={{ padding: '0 3px' }}>
        <div className='truncate'>
          Author: { author
            ? `${author.name} (${author.email})`
            : 'N/A' }
        </div>
      </div>
    </section>
  );
})`
  min-width: 240px;
  display: grid;
  grid-template-rows: calc(16px + 12px) 1fr;
  overflow: hidden;

  input {
    display: inline-block;
    height: 100%;
  }

  > div {
    display: flex;
    align-items: center;
  }

  input::-webkit-file-upload-button {
    font-family: "Abel";
    background: transparent;
    border: none;
    min-width: 6rem;
    padding: 6px;
    cursor: pointer;
    color: white;

    &:hover {
      font-weight: bold;
      background: hsla(0, 50%, 100%, 0.2);
      color: cyan;
    }
  }
  input[type="file" i] {
    display: inline-block;
    color: cyan;
  }
`;

export default FileLoader;
