const initialState = {
    users : []
}
 
const reducer = function(state = initialState, action) {
  switch (action.type) {
    case "SETUSERS":
        return {...state,users:[...state.users,action.payload]}
    case "LOADING":
        return {}
    default: 
        return state
  }
}
module.exports = reducer;