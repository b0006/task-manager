import React from 'react';

import { ReactComponent as LoaderIcon } from '../../../../assets/icons/loader.svg';
import { ReactComponent as PlusIcon } from '../../../../assets/icons/plus.svg';
import { ReactComponent as CrossIcon } from '../../../../assets/icons/cross.svg';
import { ReactComponent as CheckedIcon } from '../../../../assets/icons/checked.svg';
import { ReactComponent as InfoIcon } from '../../../../assets/icons/info.svg';
import { ReactComponent as ExclamationTriangleIcon } from '../../../../assets/icons/exclamationTriangle.svg';
import { ReactComponent as ChevronDownIcon } from '../../../../assets/icons/chevronDown.svg';
import { ReactComponent as VkIcon } from '../../../../assets/icons/vk.svg';
import { ReactComponent as GoogleIcon } from '../../../../assets/icons/google.svg';
import { ReactComponent as LogoutIcon } from '../../../../assets/icons/logout.svg';
import { ReactComponent as UserIcon } from '../../../../assets/icons/user.svg';
import { ReactComponent as TrashIcon } from '../../../../assets/icons/trash.svg';

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
  logout: LogoutIcon,
  user: UserIcon,
  trash: TrashIcon,
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
