import React from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

import profileStore from '../../../profile/store';
import { IBoardPreview } from '../../types';

import BoardActions from './BoardActions';

import styles from './BoardCard.module.scss';

interface IProps extends IBoardPreview {
  className?: string; 
}

const BoardCard: React.FC<IProps> = observer(({ id, title, titleTranspile, className }) => {
  const { profileData } = profileStore;

  return (
    <div className={cn(styles['board-card'], className)}>
      <Link to={`/${profileData?.username}/boards/${titleTranspile}`} className={styles['board-card__link']}>
        {title}
      </Link>
      <div className={styles['board-card__actions']}>
        <BoardActions id={id} title={title} />
      </div>
    </div>
  );
});

export default BoardCard;
