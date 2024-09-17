globalThis.ngJest = {
  testEnvironmentOptions: {
    errorOnUnknownElements: true,
    errorOnUnknownProperties: true,
  },
};

import '@testing-library/jest-dom';
import 'jest-axe/extend-expect';
import 'jest-preset-angular/setup-jest';
