import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import UserList from "../reducers/UserList";

console.log("dataaaaaaaaa", UserList)

const enhancer = compose(applyMiddleware(reduxThunk));
const configureStore = createStore(UserList, {}, enhancer)
export default configureStore;