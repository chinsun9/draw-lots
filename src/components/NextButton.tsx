import { css } from '@emotion/react';
import JSConfetti from 'js-confetti';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../hooks/useStore';

const emojis = [
  '✌',
  '😂',
  '😝',
  '😁',
  '😱',
  '👀',
  '🚗',
  '🍎',
  '💝',
  '💙',
  '👌',
  '❤',
  '😍',
  '😉',
  '😓',
  '😳',
  '👄',
  '🚲',
  '🍉',
  '💛',
  '💚',
];

function NextButton() {
  const { pick, initNext } = useStore();
  const onClickHandler = () => {
    new JSConfetti().addConfetti({
      emojiSize: 40,
      emojis,
      confettiNumber: 100,
    });

    initNext();

    setTimeout(() => {
      pick();
    }, 200);
  };

  return (
    <div css={style1()}>
      <button type="button" onClick={onClickHandler} css={css``}>
        next
      </button>
    </div>
  );
}

export default observer(NextButton);

export function style1() {
  return css`
    display: grid;
    place-items: center;
  `;
}
