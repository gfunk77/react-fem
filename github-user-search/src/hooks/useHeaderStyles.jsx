import { useMemo } from 'react';

const useHeaderStyles = (theme) => {
  const isLightTheme = useMemo(() => theme === 'light', [theme]);

  const titleStyle = {
    color: isLightTheme ? 'var(--light-theme-text-dark)' : 'var(--dark-theme-text-primary)',
  };

  const iconClass = isLightTheme ? 'icon-light' : 'icon-dark';

  return { titleStyle, iconClass };
};

export default useHeaderStyles;
