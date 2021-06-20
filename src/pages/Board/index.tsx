import React from 'react';
import { useParams } from 'react-router-dom';

import Container from '../../modules/layout/components/Container';

interface IParams {
  username: string;
  transpileTitle: string;
}

const BoardPage: React.FC = () => {
  const { transpileTitle } = useParams<IParams>();

  return (
    <Container>
      BoardPage
      <p>{transpileTitle}</p>
    </Container>
  );
};

export default BoardPage;
