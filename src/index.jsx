/* @refresh reload */

// HTML/DOM Solid Renderer
//import { render } from 'solid-js/web';

// Lightning 3 renderer
import Render from '@lightningjs/solid';
import { Router } from "@solidjs/router";

import App from './App';


const app = document.getElementById('app');

if (import.meta.env.DEV && !(app instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

// FIXME 
// Currently the Lightning 3 solid renderer does not take a root element. This should be fixed.

Render(() => { 
  return (
  <Router>
    <App />
  </Router>)
}, 
 {
  debug: true
});

