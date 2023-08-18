/* @refresh reload */

// HTML/DOM Solid Renderer
//import { render } from 'solid-js/web';

// Lightning 3 renderer
// import Render from '@lightningjs/solid';
import { render } from '@lightningjs/solid-lightning3';

import { Router } from "@solidjs/router";

import App from './App';


const app = document.getElementById('app');

if (import.meta.env.DEV && !(app instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => { 
  return (
    <Router>
      <App />
    </Router>
  )
}, app, {
  debug: true
});