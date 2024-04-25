'use client'

import Demo from "./components/Demo";
import State from "./components/State";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-700 text-white">
     
      <h1>Welcome To Nextjs</h1>
      {/* <button onClick={() => alert("You clicke on button")}
      className=" border-red-200 bg-green-500 p-4 ">
        click me
      </button> */}

      <Demo />
      {/* <State/> */}
    </main>
  );
}
