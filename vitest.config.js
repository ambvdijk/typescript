const ciTestSetup = {
  reporters: ['junit', 'json', 'verbose'],
  outputFile: {
    junit: './junit-report.xml',
    json: './json-report.json',
  },
};

const devTestSetup = {
  reporters: ['default']
};

export default defineConfig({
  test: process.env.CI ? ciTestSetup : devTestSetup
});
