import {createStore} from 'redux';

let counterReducer = function(state,action) {
    if(state === undefined) {
        return {
            currentScore :0
        }
    }

  if(action.type === "UPDATE_BONUS") {
    let newState = state;
    newState.currentScore = newState.currentScore + 100;
    return newState;
  }  

  if(action.type === "LEVEL_COMPLETED") {
      let newState = state;
      newState.currentScore = newState.currentScore + 500;
      return newState; 
  }
  if(action.type === "LEVEL_LOST") {
    let newState = state;
    newState.currentScore = newState.currentScore - 250;
    return newState; 
  }
  return state;
}




let store = createStore(counterReducer);

store.subscribe(function(){
    console.log(store.getState());

})

store.dispath({
    type : "UPDATE_BONUS"
})

store.dispath({
    type : "LEVEL_COMPLETED"
})

store.dispath({
    type : "LEVEL_LOST"
})