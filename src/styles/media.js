import appConfig from 'src/config/app.conf';

export default {
  tablet: `(min-width: ${appConfig.mediaQuery.tablet}px)`,
  desktop: `(min-width: ${appConfig.mediaQuery.desktop}px)`,
  ipadPro:
    'only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5)',
};
