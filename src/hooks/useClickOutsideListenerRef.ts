import { useCallback, useEffect, useRef } from 'react';

const useClickOutsideListenerRef = (onClose: () => void) => {
  const ref = useRef(null);
  const escapeListener = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, []);
  const clickListener = useCallback(
    (e: MouseEvent) => {
      console.log(
        '%c☘ %ce.target%c:',
        'font-weight:bold;color: #0F9D58;font-size:1.2em;',
        'font-weight:bold;border-bottom:2px solid #0F9D58;',
        'font-weight:bold;',
        e.target
      );
      if (!(ref.current! as any).contains(e.target)) {
        console.log(
          '%c☘ %ce.target%c:',
          'font-weight:bold;color: #00f;font-size:1.2em;',
          'font-weight:bold;border-bottom:2px solid #00f;',
          'font-weight:bold;',
          e.target
        );
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
  }, []);
  return ref;
};

export default useClickOutsideListenerRef;
