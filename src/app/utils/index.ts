export * from './bem';
export { fetchUrl, getJSON, postJSON } from './fetch';
export { randomRange } from './randomRange';

export interface Global extends NodeJS.Global {
  document: Document;
  window: Window;
  navigator: Navigator;
}

declare var global: Global;

const navigator = global.navigator && global.navigator.userAgent;

// hasWindow = true for tests + client
export const hasWindow = typeof window !== 'undefined';

// isBrowser = true for client only
export const isBrowser = typeof navigator !== 'undefined' && navigator.indexOf('jsdom/') === -1 && navigator.indexOf('Node.js') === -1;

const getLocalUrl = () => {
  if (isBrowser) {
    const { location } = window;
    return location.origin;
  }
  return `http://localhost:${process.env.PORT}`;
};

export const localUrl = getLocalUrl();
