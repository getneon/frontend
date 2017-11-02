import { createStore } from 'redux';

import { neonApp } from './reducers';


const store = createStore(neonApp);

export default store;
