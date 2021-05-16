import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface IProps {
  selector: string;
}

const ClientOnlyPortal: React.FC<IProps> = ({ children, selector }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
};

export default ClientOnlyPortal;
