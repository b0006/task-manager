import React from 'react';

import LoaderIcon from 'src/assets/icons/loader.svg';

export const ICON_LIST = {
  loader: LoaderIcon,
};

interface IProps extends React.SVGAttributes<SVGElement> {
  kind: keyof typeof ICON_LIST;
}

const SvgIcon: React.FC<IProps> = ({ kind, ...rest }) => {
  if (!kind) {
    return null;
  }

  const Icon = ICON_LIST[kind];
  return <Icon {...rest} />;
};

export default SvgIcon;
