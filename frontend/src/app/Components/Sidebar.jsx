'use client'
import React, { useState } from "react"
import {
  CloudSun,
  Home,
  Search,
  MapPin,
  Star
} from "lucide-react"




export default function Sidebar() {
  const menus = [
    {
      title: "Home",
      // ایکون رو ذخیره کردم
      icon: Home
    },
    {
      title: "Search",
      icon: Search
    },
    {
      title: "Location",
      icon: MapPin
    },
    {
      title: "Favorites",
      icon: Star
    }
  ]

  const [active, setActive] = useState("Home")


  return (
    <aside className="w-[250px] min-h-screen bg-white rounded-3xl p-5 m-5  ">
      <div className="flex items-center gap-3 ">
        <div className="w-10 h-10 rounded-2xl bg-[#052168] flex items-center justify-center">
          <CloudSun size={24} strokeWidth={2} className="text-white" />
        </div>

        <div>
          <h1 className="text-xl font-bold text-slate-800">
            Weather
          </h1>
          <p className="text-xs text-slate-400">
            Forecast Dashboard
          </p>
        </div>
      </div>


      <nav className="mt-10 flex flex-col gap-5 ">
        {menus.map((val) => {
          const Icon = val.icon
          return (
            <div
              key={val.title}
              onClick={() => setActive(val.title)}
              className={` flex items-center gap-4  h-12  px-4  rounded-xl  cursor-pointer  transition-all  duration-300 
                ${active === val.title ? "bg-[#002176] text-white shadow-md" : "text-slate-500 hover:bg-[#4f7ffa20] hover:text-[#002176]"}
               `}
            >
              <Icon size={18} strokeWidth={2} />
              <span className="font-medium">{val.title}</span>
            </div>
          )
        })}

      </nav>
    </aside>
  )
}