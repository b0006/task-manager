import React, { useState } from 'react';

import ModalLayout from './index';

export interface IProps {
  portalTargetSelector: string;
  overlayClickClose?: boolean;
  onClose?: () => void;
}

const Page: React.FC<IProps> = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button type="button" onClick={() => setOpen(!open)}>
        {open ? 'Close' : 'Open'}
      </button>
      <ModalLayout isVisible={open} onClose={() => setOpen(false)} {...props}>
        MODAL CONTENT
      </ModalLayout>
      <div id="modal" />
    </div>
  );
};

export default Page;
