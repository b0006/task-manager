import React from 'react';

import { useNotification } from 'src/modules/common/components/Notification';
import Container from 'src/modules/layout/components/Container';

export default function Home(): JSX.Element {
  const { addNotification } = useNotification();

  return (
    <Container>
      <h1>Home page</h1>
      <button type="button" onClick={() => addNotification()}>
        ADD
      </button>
    </Container>
  );
}
