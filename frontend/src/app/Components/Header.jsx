'use client'
import { Search, Bell, MapPin } from "lucide-react"

export default function Header() {

  return (
    <header className="flex items-center justify-between ">
      <div className="">
        <p className="text-sm text-slate-400">
          Good morning 👋
        </p>

        <h1 className="text-3xl font-bold text-slate-800 mt-1">
          Weather Dashboard
        </h1>

        <div className="flex items-center gap-1 mt-2 text-sm text-slate-400">
          <MapPin size={15} />
          <span>Tehran, Iran</span>
        </div>
      </div>


      <div className="flex items-center gap-4 ">
        <button className=" w-12 h-12 rounded-2xl  bg-white border border-slate-100 shadow-sm  flex items-center justify-center  text-slate-500  hover:bg-[#113ba630]  hover:text-black  transition  " >
          <Bell size={20} />
        </button>


        <div className=" flex items-center justify-center gap-3  bg-white  px-4 py-2  rounded-2xl  border border-slate-100  shadow-sm bg ">
          <div className=" w-11 h-11 rounded-full bg-gradient-to-br   from-[#002b99]  to-[#00217679]   flex items-center justify-center  text-white  font-bold">
            N
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-700">
              User
            </p>

            <p className="text-xs text-slate-400">
              User ....
            </p>
          </div>

        </div>
      </div>
    </header>
  )
}