import React from 'react';
import ReactDom from 'react-dom';

import App from './components';

export default function initReact(container: HTMLElement) {
  ReactDom.render(<App />, container);
}

window.onload = () => {
  const el = document.getElementById('app-container');

  initReact(el);
};
