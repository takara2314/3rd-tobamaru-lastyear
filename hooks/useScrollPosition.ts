import { useEffect, useRef, useState } from 'react';

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const main = useRef<HTMLElement | null>();

  const updatePosition = () => {
    setScrollPosition(main.current!.scrollTop);
  };

  useEffect(() => {
    main.current = document.querySelector('main');

    main.current!.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => {
      main.current!.removeEventListener('scroll', updatePosition);
    };
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
