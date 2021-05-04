import {createStore} from 'redux';

import allReducer from './reducer';

const store = createStore(allReducer);

store.subscribe(function () {
    console.log(store.getState());
})

export default store;