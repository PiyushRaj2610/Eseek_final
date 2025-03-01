import { SignUpDetails } from "../components/SignUpPageComponents/SignUpDetails";
import { Heading } from "../components/LoginPageComponents/Heading"
import axios from "axios";

export const SignUp = () => {


  return (

    <div className="bg-black min-h-screen flex flex-col">
  
      <div>
        <Heading text="CREATE YOUR ACCOUNT"/>
      </div>

      <div className="bg-transparent flex h-full w-full justify-center items-center pb-20">
        <SignUpDetails/>
      </div>

      
    </div>
  );
};
