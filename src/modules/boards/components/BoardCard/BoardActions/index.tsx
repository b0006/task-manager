import React, { useState } from 'react';
import cn from 'classnames';

import SvgIcon from '../../../../common/ui-kit/SvgIcon';
import Popup from '../../../../common/ui-kit/Popup';
import { useFetch } from '../../../../common/hooks';
import { useNotification } from '../../../../common/ui-kit/Notification';
import boardStore from '../../../store';

import styles from './BoardActions.module.scss';

interface IProps {
  id: string;
  title: string;
}

const BoardActions: React.FC<IProps> = ({ id, title }) => {
  const { actionRemovePreviewItem } = boardStore;
  const { addNotification } = useNotification();

  const [shownPopupRemove, setShownPopupRemove] = useState(false);

  const [removeRequest] = useFetch('/api/board', 'DELETE');

  const onCloseRemovePopup = () => {
    setShownPopupRemove(false)
  };

  const onRemoveBoard = async () => {
    const { error, response } = await removeRequest({ id });

    if (!error && response) {
      addNotification({
        title: 'Успех',
        description: `Доска "${title}" успешно удалена`
      }, {
        appearance: 'success',
      });
      actionRemovePreviewItem(id);
      onCloseRemovePopup();
    }
  }

  const onClickRemove = () => {
    setShownPopupRemove(true);
  }

  return (
    <div className={styles['board-actions']}>
      <button
        className={cn(styles['board-actions__item'], styles['board-actions__item_remove'])}
        onClick={onClickRemove}
      >
        <SvgIcon kind="trash" className={styles['board-actions__icon']} />
      </button>
      <Popup
        appearance="warning"
        title="Внимание"
        description={`Вы уверены, что хотите удалить доску "${title}"?`}
        confirm={{
          handler: onRemoveBoard, 
          label: 'Удалить'
        }}
        overlayClickClose
        cancel={{
          handler: onCloseRemovePopup,
          label: 'Отмена'
        }}
        isVisible={shownPopupRemove}
        onClose={onCloseRemovePopup}
      />
    </div>
  );
};

export default BoardActions;
