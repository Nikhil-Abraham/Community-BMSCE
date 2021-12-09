import Head from "next/head";
import Image from "next/image";
import Header from "../Components/Header";

export default function Home() {
  return (
    <div class="bg-custom_white h-screen ">
      <Header />
      <div class="text-custom_grey-150 font-Nato font-semibold text-10xl">
         


        <div id="register_area-jq" class="container  punchline flex flex-col items-center 
              justify-center border  rounded">
             SIGN UP
      <form action="/intro" method="post"  name="register-form" >
        <div class="form-group ">
          <label class="form-label" for="email">Email address:</label>
          <input   type="email" class="form-control" placeholder="Enter email" id="email">
          </input>
          </div>
        <div class="form-group">
          <label class="form-label" for="pwd">Password:</label>
          <input  type="password" class="form-control" placeholder="Enter password" id="pwd">
          </input>
          </div>
        <div class="form-group">
          <label class="form-label" for="pwd">Confirm Password:</label>
          <input   type="password" class="form-control" placeholder="Enter password" id="pwd">
          </input>
          </div>
        <div class = "register-btn">
          <input id="register_btn-jq"  value="Signup" type="submit" class="register-btn-rp">
          </input>
          </div>
      </form> 
    </div>


  
      </div>
    </div>
  );
}






