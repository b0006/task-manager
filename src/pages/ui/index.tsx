import React from 'react';
import Container from 'src/modules/layout/components/Container';

import Icon from 'src/modules/common/components/SvgIcon';

interface IUIContainerProps {
  title: string;
}

const UIContainer: React.FC<IUIContainerProps> = ({ children, title }) => (
  <div>
    <h2>{title}</h2>
    <div>{children}</div>
  </div>
);

export default function UIPage(): JSX.Element {
  return (
    <Container>
      <UIContainer title="Svg icons">
        <Icon kind="loader" style={{ height: '50px', width: '50px' }} />
      </UIContainer>
    </Container>
  );
}
