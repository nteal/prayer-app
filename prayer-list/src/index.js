import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import IdeaBox from './ideaBox.js'
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './index.css';
injectTapEventPlugin();

ReactDOM.render(<IdeaBox url='http://localhost:3001/api/ideas' ideaInterval={2000} />, document.getElementById('root'));
registerServiceWorker();
