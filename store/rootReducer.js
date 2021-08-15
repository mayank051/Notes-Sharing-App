import { combineReducers } from 'redux';
import { REHYDRATE } from "redux-persist";

const store = {
  auth: {},
  uploadNotes: false,
  readNotes: false,
  selectedSubject: ''
}

const rootReducer = (state = store, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          auth: {
            ...state.auth,
            email: action.payload.email,
          },
        };
      case "LOGOUT":
        return {
          ...state,
          auth: {
            ...state.auth,
            email: "",
          },
        };
      case "UPLOAD_NOTES":
        return {
          ...state,
          uploadNotes: true,
          readNotes: false,
        };
      case "DISPLAY_NOTES":
        return {
          ...state,
          readNotes: true,
          uploadNotes: false,
          selectedSubject: action.payload.selectedSubject,
        };
      case "SELECT_SUBJECT":
        return {
          ...state,
          selectedSubject: action.payload.selectedSubject,
        };
      case "persist/REHYDRATE": {
        return { ...state, ...action.payload };
      }
      default:
        return state;
    }
  }

export default rootReducer;

// export default combineReducers({
//   authReducer
// }
// );

