import { css } from '@emotion/react';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../hooks/useStore';
import { styleCenter } from '../styles';

function Cards() {
  const { cards } = useStore();

  return (
    <div css={styleList}>
      {cards.map((v) => (
        <div key={v} css={styleListItem}>
          {v}
        </div>
      ))}
    </div>
  );
}

export default observer(Cards);

const styleListItem = css`
  ${styleCenter}
  font-size: 16px;
  background-color: rgba(200, 200, 200, 0.15);
  padding: 0.5em;
  width: 100%;
`;

const styleList = css`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  padding: 0 20vw;
  margin-bottom: 5vh;
`;
