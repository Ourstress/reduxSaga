import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE
} from "./actions";

const reducer = (
  state = {
    fetching: false,
    dog: null,
    error: null
  },
  action
) => {
  switch (action.type) {
    case "HELLO_REACT":
      return { ...state, say: "Hello World Redux" };

    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };

    case API_CALL_SUCCESS:
      return { ...state, fetching: false, dog: action.dog };

    case API_CALL_FAILURE:
      return { ...state, fetching: false, dog: null, error: action.error };

    default:
      return state;
  }
};

export default reducer;
