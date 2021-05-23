import React from 'react';

import LoaderIcon from '../../../../assets/icons/loader.svg';
import PlusIcon from '../../../../assets/icons/plus.svg';
import CrossIcon from '../../../../assets/icons/cross.svg';
import CheckedIcon from '../../../../assets/icons/checked.svg';
import InfoIcon from '../../../../assets/icons/info.svg';
import ExclamationTriangleIcon from '../../../../assets/icons/exclamationTriangle.svg';
import ChevronDownIcon from '../../../../assets/icons/chevronDown.svg';
import VkIcon from '../../../../assets/icons/vk.svg';
import GoogleIcon from '../../../../assets/icons/google.svg';

const Empty: React.FC = () => null;

export const ICON_LIST = {
  undefined: Empty,
  loader: LoaderIcon,
  plus: PlusIcon,
  cross: CrossIcon,
  checked: CheckedIcon,
  info: InfoIcon,
  exclamationTriangle: ExclamationTriangleIcon,
  chevronDown: ChevronDownIcon,
  vk: VkIcon,
  google: GoogleIcon,
};

export interface IProps extends React.SVGAttributes<SVGElement> {
  /** Название иконки */
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
