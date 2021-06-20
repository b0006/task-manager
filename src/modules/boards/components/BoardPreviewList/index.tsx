import React from 'react';

import { IBoardPreview } from '../../types';

import AddBoardCard from '../AddBoardCard';
import BoardCard from '../BoardCard';

import styles from './BoardPreviewList.module.scss';

interface IProps {
  list: IBoardPreview[];
}

const BoardPreviewList: React.FC<IProps> = ({ list }) => {
  return (
    <div className={styles['board-preview-list']}>
      <AddBoardCard className={styles['board-preview-list__item']} />
      {list.map((board) => (
        <BoardCard key={board.id} className={styles['board-preview-list__item']} {...board} />
      ))}
    </div>
  )
};

export default BoardPreviewList;
