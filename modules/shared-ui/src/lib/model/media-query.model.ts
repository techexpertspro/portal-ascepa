export const MEDIA_QUERIES = {
  PORTRAIT: '(orientation: portrait)',
  LANDSCAPE: '(orientation: landscape)',
  SMALL_SCREEN: '(max-width: 320px)', // Small screens
  IPHONE: '(min-width: 321px) and (max-width: 375px)', // iPhone
  ANDROID: '(min-width: 376px) and (max-width: 411px)', // Android
  LARGE_MOBILE: '(min-width: 412px) and (max-width: 425px)', // Large mobiles
  TABLET: '(min-width: 426px) and (max-width: 768px)', // Tablets
  IPAD: '(min-width: 769px) and (max-width: 1024px)', // iPad
  LAPTOP: '(min-width: 1025px) and (max-width: 1280px)', // Laptops
  SMALL_LAPTOP: '(min-width: 1281px) and (max-width: 1366px)', // Small laptops
  DESKTOP: '(min-width: 1367px) and (max-width: 1440px)', // Desktops
  WIDE_DESKTOP: '(min-width: 1441px) and (max-width: 1920px)', // Wide desktops
} as const;

export type MediaQueryKeys = keyof typeof MEDIA_QUERIES;

export type MediaQueryChanges = {
  [key: string]: boolean;
};
