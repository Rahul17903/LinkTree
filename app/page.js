"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Home() {
  const [text, setText] = useState("");
  const router = useRouter()
  const createTree = ()=>{
    router.push(`/generate?handle=${text}`)
  }
  return (
    <main>
      <section className="bg-[#254f1a] min-h-[100vh] grid grid-cols-2 text-black ">
        <div className="flex justify-center flex-col ml-[10vw] gap-3">
          <p className="text-yellow-300 font-bold text-7xl">Everything you </p>
          <p className="text-yellow-300 font-bold text-7xl">are. In one,</p>
          <p className="text-yellow-300 font-bold text-7xl">
            simple link in bio.
          </p>
          <p className="text-white text-xl my-4">
            Join 50M+ people using Linktree for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div className="input flex gap-2"></div>
          <div className="input flex gap-2">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="px-2 py-2 focus:outline-green-800 rounded-md bg-white font-bold text-gray-500"
              type="text"
              placeholder="Enter your Handle"
            />
            <button
              onClick={() => createTree()}
              className="bg-[#e9c0e9] rounded-full px-4 py-4 text-[#212121] font-semibold"
            >
              Claim your Linktree
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col mr-[10vw]">
          <img src="/home.png" alt="homepage image" className="" />
        </div>
      </section>
      <section className="bg-red-500 min-h-[100vh] "></section>
    </main>
  );
}
