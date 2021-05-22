import React from 'react';

import { useNotification } from 'src/modules/common/ui-kit/Notification';
import Container from 'src/modules/layout/components/Container';

export default function Home(): JSX.Element {
  const { addNotification, removeNotification, removeAllNotifications } = useNotification();

  const addRandom = (appearance) => {
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

  const addStatic = () => {
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

  const removeStatic = () => {
    removeNotification('static');
  };

  const removeAll = () => {
    removeAllNotifications();
  };

  return (
    <Container>
      <h1>Home page</h1>
      <button type="button" onClick={() => addRandom('success')}>
        ADD success
      </button>
      <button type="button" onClick={() => addRandom('error')}>
        ADD error
      </button>
      <button type="button" onClick={() => addRandom('info')}>
        ADD info
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
