import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run portal-ascepa:serve:development',
        production: 'nx run portal-ascepa:serve:production',
      },
      ciWebServerCommand: 'nx run portal-ascepa:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
