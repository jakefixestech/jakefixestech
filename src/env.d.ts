/// <reference types="astro/client" />

declare module '*.yml' {
  const value: Record<string, any>;
  export default value;
}