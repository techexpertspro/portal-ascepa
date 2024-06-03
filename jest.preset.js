const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  ...nxPreset,
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
};
