module.exports = {
  testMatch: ['**/*.test.{js,ts}'],
  transform: {
    '^.+\\.[jt]s$': ['@swc/jest'],
  },
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/(.*)$': '<rootDir>/src/$1',

    '^__mocks__/(.*)$': '<rootDir>/__mocks__/$1',
  },
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.{js,ts}',
    '!src/handler.ts',
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
