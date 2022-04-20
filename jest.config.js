module.exports = {
  testPathIgnorePatterns: ["/node_modules", "/.next"],
  setupFilesAfterEnv: ["<rootDir>/tests/setupTests.ts"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(scss|css|sass)$": "identity-obj-proxy",
  },
  collectCoverage: true,
  collectCoverageFrom: ["/**/*.tsx", "!/**/*.spec.tsx"],
  coverageReporters: ["lcov", "json"]
};
