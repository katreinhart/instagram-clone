export default(state = [], payload) => {
  switch(payload.type){
    case 'ADD_LIKE':
      return [...state, payload.likes + 1];
    default:
      return state;
  }
}
