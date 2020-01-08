import {createstore} from 'redux';
import tweetReducer from './reducers/tweetReducers';


function configureStore() {

return createstore(tweetReducer)

}

export default configureStore;