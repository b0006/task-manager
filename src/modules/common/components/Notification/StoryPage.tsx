import React from 'react';

import Button from '../Button';
import { useNotification } from './index';
import { TAppearance } from './types';

const StoryPage: React.FC = () => {
  const { addNotification, removeNotification, removeAllNotifications } = useNotification();

  const addRandom = (appearance: TAppearance): void => {
    addNotification(
      {
        title: 'Title',
        description: 'description',
      },
      {
        placement: 'top-right',
        appearance,
      }
    );
  };

  const addStatic = (): void => {
    addNotification(
      {
        title: 'Static',
        description: 'description',
      },
      {
        id: 'static',
        placement: 'top-right',
      }
    );
  };

  const removeStatic = (): void => {
    removeNotification('static');
  };

  const removeAll = (): void => {
    removeAllNotifications();
  };

  return (
    <div>
      <Button text="ADD success" type="button" onClick={() => addRandom('success')} />
      <Button style={{ marginTop: '12px' }} text="ADD error" type="button" onClick={() => addRandom('error')} />
      <Button style={{ marginTop: '12px' }} text="ADD info" type="button" onClick={() => addRandom('info')} />
      <div style={{ marginTop: '12px' }}>
        <Button text="ADD static" type="button" onClick={addStatic} />
        <Button style={{ marginTop: '12px' }} text="REMOVE static" type="button" onClick={removeStatic} />
      </div>
      <Button style={{ marginTop: '12px' }} text="Remove all" type="button" onClick={removeAll} />
    </div>
  );
};

export default StoryPage;
