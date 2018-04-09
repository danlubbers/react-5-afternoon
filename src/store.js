// Always import {createStore} and render
import {createStore} from 'redux';
import reducer from './ducks/reducer';

// Export createStore by default and pass it 'reducer' as it's arguement
export default createStore(reducer);