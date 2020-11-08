import { useCallback, useEffect, useRef } from 'react';

const useClickOutsideListenerRef = (onClose: () => void) => {
  const ref = useRef(null);
  const escapeListener = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );
  const clickListener = useCallback(
    (e: MouseEvent) => {
      // console.log(
      //   '%c☘ %cdontcontain%c:',
      //   'font-weight:bold;color: #00f;font-size:1.2em;',
      //   'font-weight:bold;border-bottom:2px solid #00f;',
      //   'font-weight:bold;',
      //   !(ref.current! as any).contains(e.target)
      // );
      if (!(ref.current! as any).contains(e.target)) {
        onClose?.();
      }
    },
    [ref.current]
  );
  useEffect(() => {
    document.addEventListener('click', clickListener);
    document.addEventListener('keyup', escapeListener);
    return () => {
      document.removeEventListener('click', clickListener);
      document.removeEventListener('keyup', escapeListener);
    };
  }, [escapeListener, clickListener]);
  return ref;
};

export default useClickOutsideListenerRef;
