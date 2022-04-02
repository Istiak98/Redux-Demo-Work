const redux=require('redux')
const createStore=redux.createStore

const BUY_CAKE = "BUY_CAKE";

function buy_cake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

//(previousState,action)=>newState

const intialState = {
  numofCakes: 10,
};
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
          ...state,
        numofCakes: state.numofCakes - 1,
      };
    default:
      return state;
  }
};

const store=createStore(reducer)
console.log('Intial State',store.getState())
const unsubscribe=store.subscribe(()=>console.log('Updated State',store.getState()))
store.dispatch(buy_cake())
store.dispatch(buy_cake())
store.dispatch(buy_cake())

unsubscribe()

