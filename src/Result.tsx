import { css } from '@emotion/react';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from './hooks/useStore';

function Result() {
  const { next } = useStore();

  return (
    <div
      css={css`
        color: white;
        font-weight: 700;
        letter-spacing: 7px;
        text-align: center;
        margin-top: 3rem;
        transition: 0.2s ease;
        opacity: 0;

        ${next &&
        css`
          opacity: 1;
        `}
      `}
    >
      {next ? `"${next}"` : '.'}
    </div>
  );
}

export default observer(Result);
