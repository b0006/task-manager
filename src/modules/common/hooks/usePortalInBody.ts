import { useRef, useEffect, useState, ReactNode, ReactPortal } from 'react';
import { createPortal } from 'react-dom';

interface IProps {
  selector: string;
}

const usePortal = ({ selector }: IProps): ((children: ReactNode) => ReactPortal | null) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  return (children) => (mounted && ref.current ? createPortal(children, ref.current) : null);
};

export default usePortal;
