import Head from "next/head";
import Image from "next/image";
import Header from "../Components/Header";

export default function Home() {
  return (
    <div class="bg-custom_white h-screen  text-custom_grey-150 font-Nato font-semibold   ">
      <Header />

      <div class="w-screen bg-custom_white p-20 flex justify-evenly">
        <div class="text-2xl font-Nato p-5">Join the Community</div>
        <div class="mx-20 border-solid border-4 border-custom_grey-500/50 rounded-lg w-1/4 p-8">
          <form action="/intro" method="post" name="register-form">
            <div class="form-group px-6 py-6">
              <label class="form-label" for="email">
                Email
              </label>
              <br />
              <input
                type="email"
                class="form-control mt-1 rounded-lg ..."
                placeholder="    Enter email"
                id="email"
              ></input>
            </div>
            <div class="form-group px-6 py-6 ...">
              <label class="form-label" for="pwd">
                Password:
              </label>
              <br />
              <input
                type="password"
                class="form-control mt-1 rounded-lg ..."
                placeholder="    Enter password"
                id="pwd"
              ></input>
            </div>
            <div class="form-group px-6 py-6 ...">
              <label class="form-label" for="pwd">
                Confirm Password:
              </label>
              <br />
              <input
                type="password"
                class="form-control mt-1 rounded-lg ..."
                placeholder="    Enter password"
                id="pwd"
              ></input>
            </div>
            <div class="register-btn  bg-custom_blue hover:bg-custom_cyan  rounded-lg mx-20 mt-6 w-20 h-8 px-3 p-1 ...">
              <a href="">Signup</a>
            </div>
          </form>
        </div>
      </div>
      {/* <div
        id="register_area-jq"
        class="container flex flex-col items-center 
                bg-custom_pink w-screen h-screen"
      >
        <div class="py-6 mt-6  text-xl ...">SIGN UP</div>
        <div class="border-solid border-4 border-custom_grey-500/50 rounded-lg w-1/4 p-8 ...  ">
          <form action="/intro" method="post" name="register-form">
            <div class="form-group px-6 py-6">
              <label class="form-label" for="email">
                Email
              </label>
              <br />
              <input
                type="email"
                class="form-control mt-1 rounded-lg ..."
                placeholder="    Enter email"
                id="email"
              ></input>
            </div>
            <div class="form-group px-6 py-6 ...">
              <label class="form-label" for="pwd">
                Password:
              </label>
              <br />
              <input
                type="password"
                class="form-control mt-1 rounded-lg ..."
                placeholder="    Enter password"
                id="pwd"
              ></input>
            </div>
            <div class="form-group px-6 py-6 ...">
              <label class="form-label" for="pwd">
                Confirm Password:
              </label>
              <br />
              <input
                type="password"
                class="form-control mt-1 rounded-lg ..."
                placeholder="    Enter password"
                id="pwd"
              ></input>
            </div>
            <div class="register-btn  bg-custom_blue hover:bg-custom_cyan  rounded-lg mt-6 w-20 h-8 px-3 p-1 ...">
              <a href="">Signup</a>
            </div>
          </form>
        </div>
      </div> */}
    </div>
  );
}
