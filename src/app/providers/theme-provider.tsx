import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';
import { inputsCustomizations } from '../../theme/customizations/inputs';
import { dataDisplayCustomizations } from '../../theme/customizations/dataDisplay';
import { feedbackCustomizations } from '../../theme/customizations/feedback';
import { navigationCustomizations } from '../../theme/customizations/navigation';
import { surfacesCustomizations } from '../../theme/customizations/surfaces';
import { colorSchemes, typography, shadows, shape } from '../../theme/themePrimitives';
import { xThemeComponents } from '../../theme/customizations';

interface AppThemeProps {
  children: React.ReactNode;
  disableCustomTheme?: boolean;
  themeComponents?: ThemeOptions['components'];
}

const AppTheme = ({ children, disableCustomTheme, themeComponents }: AppThemeProps) => {
  const theme = React.useMemo(() => {
    return disableCustomTheme
      ? {}
      : createTheme({
        // For more details about CSS variables configuration, see https://mui.com/material-ui/customization/css-theme-variables/configuration/
        cssVariables: {
          colorSchemeSelector: 'data-mui-color-scheme',
          cssVarPrefix: 'template',
        },
        colorSchemes, // Recently added in v6 for building light & dark mode app, see https://mui.com/material-ui/customization/palette/#color-schemes
        typography,
        shadows,
        shape,
        components: {
          ...inputsCustomizations,
          ...dataDisplayCustomizations,
          ...feedbackCustomizations,
          ...navigationCustomizations,
          ...surfacesCustomizations,
          ...themeComponents,
          ...xThemeComponents,
        },
      });
  }, [disableCustomTheme, themeComponents]);
  if (disableCustomTheme) {
    return <React.Fragment>{children}</React.Fragment>;
  }
  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}


export default AppTheme