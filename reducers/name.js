initialState = ''

export const name = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return action.payload // ex {payload : "nama dari text input"}
      break;
    case "REMOVE_NAME":
      return ''
      break;
    default:
      return state
  }
}
