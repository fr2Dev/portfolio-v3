import { useCallback, useEffect, useRef } from 'react';

interface IOptions {
  click?: boolean;
  keyboard?: boolean;
}

const useClickOutsideListenerRef = (
  onClose: () => void,
  options: IOptions = {
    click: true,
    keyboard: true,
  }
) => {
  const ref = useRef(null);
  const enableOnClick = options.click;
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
      if (!(ref.current! as any).contains(e.target)) {
        onClose?.();
      }
    },
    [onClose]
  );
  useEffect(() => {
    enableOnClick && document.addEventListener('click', clickListener);
    document.addEventListener('keyup', escapeListener);
    return () => {
      enableOnClick && document.removeEventListener('click', clickListener);
      document.removeEventListener('keyup', escapeListener);
    };
  }, [onClose, escapeListener, clickListener, enableOnClick]);
  return ref;
};

export default useClickOutsideListenerRef;
