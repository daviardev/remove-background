import './app.postcss'

import { $ } from './utils/dom'

import App from './App.svelte'

const app = new App({
  target: $('#app'),
});

export default app;
