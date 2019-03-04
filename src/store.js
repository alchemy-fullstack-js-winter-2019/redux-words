import { createStore } from 'redux';
import reducer from './reducers/index';
import { Stream } from 'stream';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
