module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['**/*.test.{js,ts}'],
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.{js,ts}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.serverless/'],
};
