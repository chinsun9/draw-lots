import { css } from '@emotion/react';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../hooks/useStore';

function Cards() {
  const { cards } = useStore();

  return (
    <div css={style1()}>
      {cards.map((v) => (
        <div key={v} css={style2()}>
          {v}
        </div>
      ))}
    </div>
  );
}

export default observer(Cards);

function style2() {
  return css`
    font-size: 16px;
    background-color: rgba(200, 200, 200, 0.15);
    display: grid;
    place-items: center;
    padding: 0.5em;
    width: 100%;
  `;
}

function style1() {
  return css`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    padding: 0 20vw;
    margin-bottom: 5vh;
  `;
}
