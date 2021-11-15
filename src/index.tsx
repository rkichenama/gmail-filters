import { render } from 'react-dom';
import App from './components/App';

(async () => {
  document.body.parentElement.setAttribute('data-app', `(${__VERSION__}) ${document.title}`);
  document.title = document.body.parentElement.getAttribute('data-app');

  const container = document.createElement('section');
  container.id = 'gmail-filter';
  document.body.appendChild(container);
  const element = (<App />);
  render(element, container);
})();