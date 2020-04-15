declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly FIREBASE_CONFIG: { [key: string]: string };
    readonly QUESTIONS: { [key: string]: string };
  }
}
