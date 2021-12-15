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
            PROJECT:
            <div class="md:flex bg-blue-100 rounded-xl p-8 md:p-0">
  <div class="pt-6 md:p-8 text-center space-y-4">
    <blockquote>
      <p class="text-lg font-small">
“This dataset is of passengers who traveled on the titanic. It has details like passenger age, ticket fare, cabin, and gender. Based on this
information, you will need to predict whether these passengers survived or not.It is a simple binary classification problem, and all you need to do
is predict if a particular passenger survived. The best thing about this dataset is that all the pre-processing is done for you. You have a nice,
clean dataset to train your machine learning model.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500">
        Justin Foley
      </div>
      <div class="text-gray-700">
        Engineer, Ohio
      </div>
    </figcaption>
  </div>
</div>
<div class="md:flex bg-blue-100 rounded-xl p-8 md:p-0">
<div class="pt-6 md:p-8 text-center space-y-4">
<blockquote>
<p class="text-lg font-small">
“ If you know python then you could develop this data analytics project in python which can detect a hoax or false news that is generated to fulfill some
political agenda. This news is propagated through social media channels and other online media. The model is built using the python language which can
accurately detect the genuineness of a news item. You could use a PassiveAggressiveClassifier to build a TfidfVectorizer which can classify news into
“fake” or “real”.”
</p>
</blockquote>
<figcaption class="font-medium">
<div class="text-sky-500">
Kumar
</div>
<div class="text-gray-700">
Data Analyst, Chennai
</div>
</figcaption>
</div>
</div>
<div class="md:flex bg-blue-100 rounded-xl p-8 md:p-0">
<div class="pt-6 md:p-8 text-center space-y-4">
<blockquote>
<p class="text-lg font-small">
“User interface (UI) designers work closely with user experience (UX) designers and other design specialists. Their job is to make sure that every page
and every step a user will experience in their interaction with the finished product will conform to the overall vision created by UX designers.”
</p>
</blockquote>
<figcaption class="font-medium">
<div class="text-sky-500">
Sarah Dayan
</div>
<div class="text-gray-700">
UI/UX designer, Algolia
</div>
</figcaption>
</div>
</div>
            </div>

    <div>ALUMINI:</div>
      <div>TEACHER:</div>
        </div>
  );
}
