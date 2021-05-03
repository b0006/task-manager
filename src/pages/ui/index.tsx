import React from 'react';
import Container from 'src/modules/layout/components/Container';

import Icon from 'src/modules/common/components/SvgIcon';
import Button from 'src/modules/common/components/Button';

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
      <UIContainer title="Buttons">
        <Button icon="plus" />
        <Button icon="plus" isCircle />
        <Button text="Кнопка" />
        <Button text="Кнопка с иконкой" icon="plus" />
        <Button text="Кнопка с иконкой" icon="plus" iconSide="right" />
        <Button text="Кнопка отключенная" disabled />
        <Button text="Кнопка отключенная" disabled icon="plus" />
        <Button text="Кнопка отключенная" disabled icon="plus" iconSide="right" />
        <Button text="Кнопка с лоадером" isLoading />
        <Button text="Кнопка с лоадером" isLoading iconSide="right" />
      </UIContainer>
    </Container>
  );
}
