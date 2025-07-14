"use client";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Generate = () => {
  const searchParams = useSearchParams()
  
  const [links,setLinks] = useState([{link:"",linktext : ""}])
  const [pic,setPic] = useState("")
  const [disc,setDisc] = useState("")
  const [handle,sethandle] = useState(searchParams.get('handle'))
  
  const submitLinks = async (link, text) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "handle": handle,
      "links": links,
      "pic" : pic,
      "disc":disc
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    console.log(raw)
    const r = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/add`, requestOptions)
      const result = await r.json()
      if(result.success){
        toast.success(result.message)
        setLinks([{link:"",linktext : ""}])
        sethandle("") 
        setPic("")
        setDisc("")
      }else{
        toast.error(result.message)
      }

  };
  const handleChange = (index,link,linktext)=> {
    setLinks((e)=>{
      return e.map((item,i)=>{
        if(i==index){
          return {link,linktext}
        }
        else{
          return item
        }
      })
    })
  }
  const addLink = ()=>{
    setLinks(links.concat([{link: "", linktext: ""}]))
  }
  return (
    <div className="bg-[#E9C0E9] min-h-screen grid grid-cols-2 pt-10">
      <div className="col1 flex justify-center items-center flex-col text-gray-900">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-4xl">Create your linktree</h1>
          <div className="item">
            <h2 className="font-semibold text-2xl">
              Step 1: Claim your Handle
            </h2>
            <div className="mx-4">
              <input
              value = {handle || ""}
              onChange={e=>{sethandle(e.target.value)}}
                className="px-4 py-2 my-2 focus:outline-pink-500 rounded-full border"
                type="text"
                placeholder="Choose a Handle"
              />
            </div>
          </div>
          <div className="item">
            <h2 className="font-semibold text-2xl">Step 2: Add Links</h2>
            {links && links.map((item, index)=>{
              return <div key={index} className='mx-4'>
              <input value={item.linktext || ""}  onChange={e=>{handleChange(index, item.link, e.target.value)}} className='px-4 py-2 border mx-2 my-2 focus:outline-pink-500 rounded-full' type="text" placeholder='Enter link text' />
              <input value={item.link || ""} onChange={e=>{handleChange(index, e.target.value, item.linktext)}} className='px-4 py-2 border mx-2 my-2 focus:outline-pink-500 rounded-full'
                type="text" placeholder='Enter link' />
            </div>
            })}
            <button
              onClick={()=>addLink()}
              className="p-5 py-2 mx-2 bg-slate-900 text-white font-bold rounded-3xl "
            >
              + Add Link
            </button>
          </div>

          <div className="item">
            <h2 className="font-semibold text-2xl">
              Step 3: Add Picture and Description
            </h2>
            <div className="mx-4 flex flex-col">
              <input
                value = {pic|| ""}
                onChange={e=>setPic(e.target.value)}
                className="px-4 py-2 border mx-2 my-2 focus:outline-pink-500 rounded-full"
                type="text"
                placeholder="Enter link to your Picture"
              />
              <input value = {disc || ""} onChange={e=>setDisc(e.target.value)} className="px-4 py-2 border mx-2 my-2 focus:outline-pink-500 rounded-full" type="text"  placeholder="Enter description"/>
              <button disabled={pic == "" || handle=="" || links[0].linktext == "" || links[0].link == "" || disc == ""} onClick={()=>submitLinks()} className="disabled:bg-slate-500 p-5 py-2 mx-2 w-fit my-5 bg-slate-900 text-white font-bold rounded-3xl">
                Create your linktree
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col2 w-full h-screen bg-[#E9C0E9]">
        <img
          className="h-full object-contain"
          src="/generate.png"
          alt="Generate your links"
        />

        <ToastContainer />
      </div>
    </div>
  );
};

export default Generate;
