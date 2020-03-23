import {createStore} from 'redux';
import appReducer from './appReducer';

const Store = createStore(appReducer);

export default Store;
