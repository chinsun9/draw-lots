import { css } from '@emotion/react';
import React from 'react';
import { ReactComponent as JsonFIleIcon } from '../icons/jsonFile.svg';

function DropZoneGuide() {
  return (
    <div css={style()}>
      <div>
        <JsonFIleIcon />
      </div>
    </div>
  );
}

export default DropZoneGuide;
function style() {
  return css`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    padding: 3rem;
    pointer-events: none;
    font-size: 3rem;

    > div {
      border: 3px dashed black;
      border-radius: 3rem;
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      > svg {
        width: 6rem;
        height: 6rem;
      }
    }
  `;
}
