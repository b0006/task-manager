import React from 'react';

// import CartIcon from '../../../../assets/icons/cart.svg';

export const ICON_LIST = {
  cart: () => null,
  // cart: CartIcon,
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
