'use client'
import { useState, useEffect } from "react"
import {
    CloudSun,
    MapPin,
    Wind,
    Droplets,
    Thermometer
} from "lucide-react"

export default function WeatherCard() {
    const [video, setVideo] = useState("")

    useEffect(() => {
        const hour = new Date().getHours()
        setVideo(hour >= 6 && hour < 18 ? "/1.mp4" : "/2.mp4")
    }, [])

    const details = [
        {
            icon: Thermometer,
            title: "Feels like",
            value: "31°"
        },
        {
            icon: Droplets,
            title: "Humidity",
            value: "45%"
        },
        {
            icon: Wind,
            title: "Wind",
            value: "12 km/h"
        }
    ]

    return (
        <section className="relative overflow-hidden mt-8 rounded-[40px] p-8 min-h-[350px] text-white shadow-[0_25px_60px_-15px_rgba(0,40,140,0.5)] transition isolate">

            {video && (
                <video
                    key={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src={video} type="video/mp4" />
                </video>
            )}

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-white/20 blur-[80px]" />

            <div className="absolute left-10 bottom-0 w-40 h-40 rounded-full bg-cyan-300/20 blur-[70px]" />

            <div className="relative z-10 flex justify-between items-start">
                <div className="w-36 h-36 rounded-[35px] bg-white/15 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-xl">
                    <CloudSun size={90} strokeWidth={1.2} />
                </div>

                <div className="text-right">
                    <h1 className="text-[90px] leading-none font-black tracking-tight">
                        28°
                    </h1>

                    <p className="text-3xl font-semibold mt-3">
                        Sunny
                    </p>

                    <div className="flex justify-end items-center gap-2 mt-6 text-white/80">
                        <MapPin size={17} />
                        <span>
                            Tehran, Iran
                        </span>
                    </div>
                </div>
            </div>

            <div className="relative z-10 mt-12 grid grid-cols-3 gap-5">
                {details.map((val) => {
                    const Icon = val.icon
                    return (
                        <WeatherInfo key={val.title} icon={<Icon size={24} />} title={val.title} value={val.value} />
                    )
                })}
            </div>
        </section>
    )
}

function WeatherInfo({ icon, title, value }) {
    return (
        <div className="bg-white/15 backdrop-blur-xl border border-white/20 rounded-3xl p-5 shadow-lg hover:bg-white/25 hover:-translate-y-1 transition duration-300">
            <div className="opacity-90">{icon}</div>
            <p className="text-sm text-white/70 mt-4">{title}</p>
            <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
    )
}