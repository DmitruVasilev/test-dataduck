import updateEmailList from "./email-list";

const reducer = (state, action) => {
  return {
    emailList: updateEmailList(state, action),
  };
};

export default reducer;
