const emailsRequested = () => {
  return {
    type: "FETCH_EMAILS_REQUEST",
  };
};

const emailsLoaded = (newEmails) => {
  return {
    type: "FETCH_EMAILS_SUCCESS",
    payload: newEmails,
  };
};

const emailAdd = (newEmail) => {
  return {
    type: "ADD_EMAIL",
    payload: newEmail,
  };
};

const emailsError = (error) => {
  return {
    type: "FETCH_EMAILS_FAILURE",
    payload: error,
  };
};

const fetchEmails = (emailStoreService) => () => (dispatch) => {
  dispatch(emailsRequested());
  emailStoreService
    .getEmails()
    .then((data) => dispatch(emailsLoaded(data)))
    .catch((err) => dispatch(emailsError(err)));
};

export {emailAdd, fetchEmails};
