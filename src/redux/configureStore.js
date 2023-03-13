import {createStore} from 'redux'; //use configureStore instead
import {Reducer, initialState} from './reducer';

export const ConfigureStore = () => {
    const store = createStore(Reducer, initialState);
    return store;
}