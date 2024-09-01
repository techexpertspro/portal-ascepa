export type MediaQueryChanges = {
  '(orientation: portrait)': boolean;
  '(orientation: landscape)': boolean;
  '(max-width: 320px)': boolean; // Small screens (e.g., older smartphones)
  '(min-width: 321px) and (max-width: 375px)': boolean; // iPhone
  '(min-width: 376px) and (max-width: 411px)': boolean; // Android
  '(min-width: 412px) and (max-width: 425px)': boolean; // Large mobiles
  '(min-width: 426px) and (max-width: 768px)': boolean; // Tablets
  '(min-width: 769px) and (max-width: 1024px)': boolean; // iPad
  '(min-width: 1025px) and (max-width: 1280px)': boolean; // Laptops
  '(min-width: 1281px) and (max-width: 1366px)': boolean; // Small laptops
  '(min-width: 1367px) and (max-width: 1440px)': boolean; // Desktops
  '(min-width: 1441px) and (max-width: 1920px)': boolean; // Wide desktops
};
