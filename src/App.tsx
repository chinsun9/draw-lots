import { css } from '@emotion/react';
import { observer } from 'mobx-react-lite';
import React from 'react';
import Cards from './components/Cards';
import DropZoneGuide from './components/DropZoneGuide';
import { useStore } from './hooks/useStore';
import NextButton from './components/NextButton';
import Result from './Result';

function App() {
  const { isDragging, setIsDragging } = useStore().globalStore;
  const { loadData } = useStore();

  const onDragEnterHandler = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(true);
  };

  const onDragLeaveHandler = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    const { relatedTarget } = e;

    if (!relatedTarget) {
      setIsDragging(false);
      return;
    }

    if (!(relatedTarget instanceof HTMLElement)) return;
    if (!(relatedTarget.tagName === 'HTML')) return;
    setIsDragging(false);
  };

  const onDragOverHandler = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
  };

  const onDropHandler = async (
    e: React.DragEvent<HTMLDivElement>,
  ): Promise<void> => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const { files } = e.dataTransfer;

    if (files.length !== 1) {
      alert('.json 파일 한개만 필요합니다');
      return;
    }

    const data = files[0];

    const jsonString = await data.text();

    loadData(jsonString);
  };

  return (
    <>
      <div
        css={styleMain(isDragging)}
        onDragEnter={onDragEnterHandler}
        onDragLeave={onDragLeaveHandler}
        onDragOver={onDragOverHandler}
        onDrop={onDropHandler}
      >
        <Cards />
        <NextButton />
        <Result />
      </div>

      {isDragging && <DropZoneGuide />}
    </>
  );
}

export default observer(App);

const styleMain = (isDragging: boolean) => css`
  background: #1e1e1e;
  font-size: 3rem;
  padding: 3rem;
  min-height: 100vh;
  height: 100%;
  color: #d4d4d4;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${isDragging &&
  css`
    filter: blur(14px);
  `}
`;
