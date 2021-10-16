import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Redux
import reducer from "./reducers";

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));

export default createStore(reducer, composeEnhancers);
