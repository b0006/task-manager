import React from 'react';

import { useNotification } from 'src/modules/common/components/Notification';
import Container from 'src/modules/layout/components/Container';

export default function Home(): JSX.Element {
  const { addNotification, removeNotification, removeAllNotifications } = useNotification();

  const addRandom = () => {
    addNotification(
      {
        title: 'Title',
        description: 'description',
      },
      {
        placement: 'top-right',
        appearance: 'info',
      }
    );
  };

  const addStatic = () => {
    addNotification(
      {
        title: 'Title',
        description: 'description',
      },
      {
        id: 'static',
        placement: 'top-right',
        appearance: 'info',
      }
    );
  };

  const removeStatic = () => {
    removeNotification('static');
  };

  const removeAll = () => {
    removeAllNotifications();
  };

  return (
    <Container>
      <h1>Home page</h1>
      <button type="button" onClick={addRandom}>
        ADD
      </button>
      <div>
        <button type="button" onClick={addStatic}>
          ADD static
        </button>
        <button type="button" onClick={removeStatic}>
          REMOVE static
        </button>
      </div>
      <button type="button" onClick={removeAll}>
        Remove all
      </button>
    </Container>
  );
}
