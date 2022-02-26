import { css } from '@emotion/react';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../hooks/useStore';
import { confetti } from '../utils';

function NextButton() {
  const { pick, initNext } = useStore();

  const onClickHandler = () => {
    confetti();
    initNext();
    setTimeout(pick, 200);
  };

  return (
    <div css={style1()}>
      <button type="button" onClick={onClickHandler}>
        next
      </button>
    </div>
  );
}

export default observer(NextButton);

function style1() {
  return css`
    display: grid;
    place-items: center;
  `;
}
