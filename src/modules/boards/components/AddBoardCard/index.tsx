import React, { useState } from 'react';
import cn from 'classnames';

import SvgIcon from '../../../common/ui-kit/SvgIcon';

import AddBoardForm from './AddBoardForm';

import styles from './AddBoardCard.module.scss';

interface IProps {
  className?: string;
}

const AddBoardCard: React.FC<IProps> = ({ className }) => {
  const [isShown, setIsShown] = useState(false);

  const onHide = () => setIsShown(false);
  const onClick = () => setIsShown(!isShown);

  return (
    <React.Fragment>
      <button onClick={onClick} className={cn(styles['add-board-card'], className)} type="button">
        <SvgIcon className={styles['add-board-card__icon']} kind="plus" />
      </button>
      <AddBoardForm isVisible={isShown} onHide={onHide} />
    </React.Fragment>
  )
};

export default AddBoardCard;
