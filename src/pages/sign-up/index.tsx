import React from 'react';

import Container from 'src/modules/layout/components/Container';
import FormLayout from 'src/modules/profile/components/FormLayout';
import SignUpForm from 'src/modules/profile/components/SignUpForm';

export default function SignUp(): JSX.Element {
  return (
    <Container>
      <div>SignUp</div>
      <FormLayout>
        <SignUpForm />
      </FormLayout>
    </Container>
  );
}
