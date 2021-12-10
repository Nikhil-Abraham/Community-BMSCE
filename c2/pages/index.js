import Head from "next/head";
import Image from "next/image";
import Header from "../Components/Header";


export default function Home() {
  return (
    <div class="bg-custom_white h-screen  text-custom_grey-150 font-Nato font-semibold   ">
      <Header />


        <div id="register_area-jq" class="container  punchline flex flex-col items-center bg-custom_blue w-full h-screen mb-8 ... ">


            <div class="py-12 ... mt-15 ... text-xl ..">LOGIN</div>
      <form action="/intro" method="post"  name="login"  >
        <div class="form-group py-6 ...">
          <label class="form-label" for="email">Enter your email:</label><br/>
          <input   type="email" class="form-control " placeholder="Enter email" id="email">
          </input>
          </div>
        <div class="form-group py-6 ...">
          <label class="form-label" for="pwd">Password:</label><br/>
          <input  type="password" class="form-control " placeholder="Enter password" id="pwd">
          </input>
          </div>
        <div class = "register-btn  bg-custom_black hover:bg-custom_black mt-9 ... w-20 ... h-9 ... ml-36 ...">
        <a href="">LOGIN</a>
          </div>
      </form>
    </div>

  </div>

  );
}
