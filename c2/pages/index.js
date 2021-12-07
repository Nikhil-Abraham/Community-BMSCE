import Head from "next/head";
import Image from "next/image";
import Header from "../Components/Header";

export default function Home() {
  return (
    <div class="bg-custom_white h-screen">
      <Header />
      <div class="text-custom_grey-150 font-Nato font-semibold text-10xl">
        Community
      </div>
    </div>
  );
}
