import React from 'react';

import LoaderIcon from '../../../../assets/icons/loader.svg';
import PlusIcon from '../../../../assets/icons/plus.svg';

const Empty: React.FC = () => null;

export const ICON_LIST = {
  undefined: Empty,
  loader: LoaderIcon,
  plus: PlusIcon,
};

export interface IProps extends React.SVGAttributes<SVGElement> {
  kind?: keyof typeof ICON_LIST;
}

const SvgIcon: React.FC<IProps> = ({ kind, ...rest }) => {
  if (!kind) {
    return null;
  }

  const Icon = ICON_LIST[kind];
  return <Icon {...rest} />;
};

export default SvgIcon;
