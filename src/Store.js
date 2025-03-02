import { legacy_createStore as createStore } from "redux";
import MainReducer from "./MainReducer";

const Store = createStore(MainReducer);

export default Store;