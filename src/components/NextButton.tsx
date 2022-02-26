import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../hooks/useStore';
import { confetti } from '../utils';
import { styleCenter } from '../styles';

function NextButton() {
  const { pick, initNext } = useStore();

  const onClickHandler = () => {
    confetti();
    initNext();
    setTimeout(pick, 200);
  };

  return (
    <div css={styleCenter}>
      <button type="button" onClick={onClickHandler}>
        next
      </button>
    </div>
  );
}

export default observer(NextButton);
