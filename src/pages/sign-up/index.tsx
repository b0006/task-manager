import React from 'react';

import Container from 'src/modules/layout/components/Container';
import SignUpForm from 'src/modules/profile/components/SignUpForm';

export default function SignUp(): JSX.Element {
  return (
    <Container>
      <div>SignUp</div>
      <SignUpForm />
    </Container>
  );
}
