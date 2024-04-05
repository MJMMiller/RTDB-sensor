import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'RTDB_Thermometer',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
