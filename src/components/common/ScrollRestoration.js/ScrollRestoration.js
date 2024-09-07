import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ScrollRestoration = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const restoreScrollPosition = (location) => {
      const scrollY = location.state?.scrollY || 0;
      window.scrollTo(0, scrollY);
    };

    restoreScrollPosition(location);

    const saveScrollPosition = () => {
      const scrollY = window.scrollY;
      navigate(location.pathname, {
        replace: true,
        state: { ...location.state, scrollY },
      });
    };

    window.addEventListener('beforeunload', saveScrollPosition);

    return () => {
      window.removeEventListener('beforeunload', saveScrollPosition);
    };
  }, [location, navigate]);

  return null;
};

export default ScrollRestoration;
