import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation";
export default async function Page({params}){
    const handle = (await params).handle
    const client = await clientPromise;
    const db = client.db("linktree")
    const collection = db.collection("links")
    const item = await collection.findOne({handle})
    if(!item){
        return notFound()
    }
    return <>{item && <div className="bg-[#ebdb256f] min-h-screen pt-40 flex justify-center items-center">
        <div className="photo flex flex-col gap-4">
            <img src={item.pic} alt="" height={100} width={100} className="rounded-full m-auto"/>
            <span className="font-bold text-center">@{item.handle} </span>
            <div className="disc">{item.disc}</div>
            <div className="links m-auto">
                {item.links.map((items,index)=>{
                    return <Link href={items.link} key={index}> <div className="bg-amber-700 m-3 rounded-md py-3 px-4  text-center" key={index}>
                        {items.linktext}
                    </div>
                    </Link>
                })}
            </div>
        </div>
         </div>
        }</>
}
