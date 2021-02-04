import React from "react";
import "./sign-in-sign-up-page.scss";
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUpPage = () => (
  <div className='sign-in-sign-up'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
