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
