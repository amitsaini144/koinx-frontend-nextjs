import { StaticImageData } from "next/image";
import Image from "next/image"

interface myProps{
    name: string;
    imgUrl: StaticImageData;
    role: string;
    description: string;
}

export default function TeamCard({ name, imgUrl, role, description}: myProps) {
  return (
    <div className="flex flex-col md:flex-row bg-slate-200 py-2 px-1 md:px-1 rounded-lg items-center my-8" >
        <div className=" text-center my-1 min-w-24 max-w-28 ml-3">
            <Image src={imgUrl} placeholder="blur" alt="team-member-1" className="rounded-lg "/>
            <h3 className="text-sm font-bold mt-2">{ name }</h3>
            <p className="text-xs text-black/70">{ role }</p>
        </div>

        <div className="px-4 py-2 ml-5">
        <p className="font-medium text-sm text-black/90  ">{ description }</p>
        </div>
    </div>
  )
}
