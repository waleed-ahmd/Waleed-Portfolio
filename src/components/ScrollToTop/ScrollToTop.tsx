import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { Button } from './ScrollToTop.styles';

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 640);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Button $visible={visible} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top">
      <FiArrowUp size={20} />
    </Button>
  );
};
