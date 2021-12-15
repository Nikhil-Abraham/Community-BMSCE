import Head from "next/head";
import Image from "next/image";
import Header from "../Components/Header";

export default function Home() {
  return (
    <div class="bg-custom_white h-screen  text-custom_grey-150 font-Nato font-semibold   ">
    <Header />
      <div class="w-screen bg-custom_pink p-15 flex justify-evenly">
        <div class="text-2xl font-Nato p-5">Welcome to the homepage</div>
        <nav class="flex items-center h-16 text-white">
                <svg
                    class="md:hidden h-8 px-3 py-1 border rounded-sm"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                </svg>
                <div
                    class="hidden lg:inline-flex text-sm lg:text-base text-black space-x-4 lg:space-x-8 font-primary"
                >
                    <a href="#">Home</a>
                    <a href="#">Feed</a>
                    <a href="#">Profile</a>
                    <a href="#">Chatrooms</a>
                    <a href="#">Projects</a>
                </div>
            </nav>
            </div>
            <div>
            <li class="flex space-y-4">
      <a href="/new" class="hover:border-black-500 hover:border-solid hover:bg-pink hover:text-black-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-300 text-sm leading-6 text-gray-900 font-medium py-3 space-x-4">
        <svg class="group-hover:text-black-500 mb-1 text-gray-400 space-x-4" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
        </svg>
        New project
      </a>
    </li>
    </div>
    <div>ALUMINI:</div>
      <div>TEACHER:</div>
        </div>
  );
}
