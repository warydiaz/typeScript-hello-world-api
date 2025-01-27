module.exports = {
  testMatch: ["<rootDir>/src/tests/integration/*.test.ts"], // Asumiendo que los tests son de TypeScript
  transform: {
    "^.+\\.ts$": "ts-jest", // Usar ts-jest para transpilar los archivos de TypeScript
  },
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["json", "lcov", "text", "clover"],
};
