import React, { useState } from "react";

import SignUpForm from "../../sign-up-form/sign-up-form.component";
import SignInForm from "../../sign-in-form/sign-in-form.component";
import { AuthenticationContainer } from "./authentication.styles.jsx";

const Authentication = () => {
  //   const logGoogleUser = async () => {
  //     const { user } = await signInWithGooglePopup();
  //     const userDocRef = await createUserDocumentFromAuth(user);
  //   };

  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
