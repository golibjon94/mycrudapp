import {createStore} from 'redux';
import {reduxer} from './reducer';

export let store = createStore(reduxer);
