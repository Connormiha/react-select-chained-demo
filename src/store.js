import reducers from './reducers';
import {createStore} from 'redux';

export let createAppStore = () =>
    createStore(reducers);

export default createAppStore();
