module.exports = {
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { configFile: './jest.babel.config.cjs' }],
  },
  testEnvironment: 'jsdom',
};
