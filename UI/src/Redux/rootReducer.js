import { combineReducers } from 'redux'
import albumListReducer from './albumLists/albumListReducer'
import photoListReducer from './photoLists/photoListReducer'
import userListReducer from './userLists/userListReducer'

const rootReducer = combineReducers({
  albumList: albumListReducer,
  photoList: photoListReducer,
  userList: userListReducer,
})

export default rootReducer
