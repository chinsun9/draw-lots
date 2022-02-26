import { css } from '@emotion/react';
import React from 'react';
import { ReactComponent as JsonFIleIcon } from '../icons/jsonFile.svg';
import { styleCenter } from '../styles';

function DropZoneGuide() {
  return (
    <div css={style()}>
      <JsonFIleIcon />
    </div>
  );
}

export default DropZoneGuide;

function style() {
  return css`
    ${styleCenter}
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 3rem;
    border: 3px dashed white;
    border-radius: 3rem;
    backdrop-filter: blur(14px);
    pointer-events: none;

    svg {
      width: 6rem;
      height: 6rem;
      color: white;
    }
  `;
}
