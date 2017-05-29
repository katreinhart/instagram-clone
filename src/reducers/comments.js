export default(state = [], payload) => {
  switch(payload.type){
    case 'ADD_COMMENT':
      return [...state, payload.payload];
    default:
      return state;
  }
}
