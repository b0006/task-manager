import React from 'react';

import Container from 'src/modules/layout/components/Container';
import LoginForm from 'src/modules/profile/components/LoginForm';

export default function Login(): JSX.Element {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
}
