let initialState = [
] //inisiasi value awal untuk state

export const myList = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":{
        const user = action.payload // object payload dari aksi onAddUser. ex. {id:3, name:'Aji'}
        let users = state.concat([user]) // membuat obj user menjadi array dan di gabungkan dengan array state
        return users //mengembalikan nilai user sebagai state yang sudah bertambah datanya
      }
      break;
    case "REMOVE_USER":{
        const id = action.payload // object payload dari aksi onAddUser. ex. {id:3, name:'Aji'}
        let users = state.filter(obj => obj.id != id) // membuat obj user menjadi array dan di gabungkan dengan array state
        return users //mengembalikan nilai user sebagai state yang sudah bertambah datanya
      }
      break;
    case "FETCH_USER":{
        return state
      }
      break;
    default:
      return state
  }
}
