import React, { useState } from 'react';

import Button from '../Button';

import Popup, { IHandler } from './index';
import { TAppearance } from './types';

export interface IProps {
  overlayClickClose?: boolean;
  showCloseButton?: boolean;
  appearance?: TAppearance;
  title?: string;
  description?: string;
  confirm?: IHandler;
  cancel?: IHandler;
}

const StoryPage: React.FC<IProps> = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button type="button" onClick={() => setOpen(!open)} text={open ? 'Close' : 'Open'} />
      <Popup isVisible={open} onClose={() => setOpen(false)} {...props} />
    </div>
  );
};

export default StoryPage;
