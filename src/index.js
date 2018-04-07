import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';

import App from './containers/App';

import './index.css';

const wls = JSON.parse(localStorage.getItem("widgets"));
const tls = parseInt(localStorage.getItem("temp") ? localStorage.getItem("temp") : 0, 10);
const initialState = {
	widgets: wls || [],
	selected: {},
	temp: tls,
};
const store = createStore(reducer, initialState, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root"),
);