import React, { useState } from 'react';

import Notification, { IProps } from './index';

const Page: React.FC<IProps> = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button type="button" onClick={() => setOpen(!open)}>
        {open ? 'Close' : 'Open'}
      </button>
      <Notification {...props} isShowed={open} />
      <div id="modal" />
    </div>
  );
};

export default Page;
