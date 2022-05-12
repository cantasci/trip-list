import { useEffect } from 'react';

const useMouseCapture = (eventHandler: (evt: MouseEvent | TouchEvent) => void): void => {
  useEffect(() => {
    document.addEventListener('mousedown', eventHandler);
    document.addEventListener('touchstart', eventHandler);

    return (): void => {
      document.removeEventListener('mousedown', eventHandler);
      document.removeEventListener('touchstart', eventHandler);
    };
  }, [eventHandler]);
};

export default useMouseCapture;
