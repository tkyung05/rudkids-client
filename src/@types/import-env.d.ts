declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_SERVER_URL: string;
    NEXT_PUBLIC_CLIENT_URL: string;
    NEXT_PUBLIC_PAYMENT_CLIENT_KEY: string;
  }
}
