import React from "react";
import {EmailsStoreServiceConsumer} from "../emailsStore-service-context";

const withEmailStoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <EmailsStoreServiceConsumer>
        {(emailStoreService) => {
          return <Wrapped {...props} emailStoreService={emailStoreService} />;
        }}
      </EmailsStoreServiceConsumer>
    );
  };
};

export default withEmailStoreService;
