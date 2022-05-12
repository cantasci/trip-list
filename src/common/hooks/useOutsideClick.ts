import { useRef, RefObject } from 'react';

import useMouseCapture from './useMouseCapture';

const useOutsideClick = (
  eventHandler: (target?: HTMLElement) => void
): RefObject<HTMLDivElement> => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = ({ target }: MouseEvent | TouchEvent): void => {
    if (containerRef.current && !containerRef.current.contains(target as Node)) {
      eventHandler && eventHandler(target as HTMLElement);
    }
  };

  useMouseCapture(handleClickOutside);

  return containerRef;
};

export default useOutsideClick;
