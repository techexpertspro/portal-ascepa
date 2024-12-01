// @ts-expect-error https://thymikee.github.io/jest-preset-angular/docs/getting-started/test-environment
globalThis.ngJest = {
  testEnvironmentOptions: {
    errorOnUnknownElements: true,
    errorOnUnknownProperties: true,
  },
};

// eslint-disable-next-line @nx/enforce-module-boundaries
import '@testing-library/jest-dom';
import 'jest-axe/extend-expect';
import 'jest-preset-angular/setup-jest';
