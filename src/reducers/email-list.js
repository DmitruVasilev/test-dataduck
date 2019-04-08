const initialState = {
  emails: [],
  loading: true,
  error: null,
};

const updateEmailList = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_EMAILS_REQUEST":
      return {
        emails: [],
        loading: true,
        error: null,
      };

    case "FETCH_EMAILS_SUCCESS":
      return {
        emails: action.payload,
        loading: false,
        error: null,
      };

    case "ADD_EMAIL":
      const {id, email, currency, password} = action.payload;
      const newEmail = {id, email, currency, password};
      return {
        ...state.emailList,
        emails: [...state.emailList.emails, newEmail],
      };

    case "FETCH_EMAILS_FAILURE":
      return {
        emails: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default updateEmailList;
