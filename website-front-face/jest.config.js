module.exports = {
  setupFilesAfterEnv: ["<rootDir>/setUpTests.ts"],
  moduleDirectories: ["node_modules", "src", "test-utils", "assets"],
  testEnvironment: "jsdom",
  setupFiles: ["<rootDir>/src/__mocks__/browserMocks.ts"],
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/__mocks__/fileMock.tsx",
    "\\.(css|less)$": "<rootDir>/src/__mocks__/fileMock.tsx",
  },
};
