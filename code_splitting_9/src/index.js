import _ from 'lodash';

  function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = 'Welcome to Webpack tutorial';
    return element;
  }

  document.body.appendChild(component());