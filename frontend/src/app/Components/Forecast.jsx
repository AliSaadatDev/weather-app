import {
    Sun,
    Cloud,
    CloudRain
} from "lucide-react";


const forecast = [
    {
        day: "Mon",
        icon: Sun,
        temp: "28°"
    },
    {
        day: "Tue",
        icon: CloudRain,
        temp: "24°"
    },
    {
        day: "Wed",
        icon: Cloud,
        temp: "26°"
    },
    {
        day: "Thu",
        icon: Sun,
        temp: "30°"
    },
    {
        day: "Fri",
        icon: Cloud,
        temp: "25°"
    }
];


export default function Forecast() {

    return (
        <section className="mt-8">

            <h2 className="text-xl font-bold text-slate-800 mb-5">
                5 Days Forecast
            </h2>


            <div className="grid grid-cols-5 gap-4">

                {forecast.map((item) => {

                    const Icon = item.icon

                    return (
                        <div key={item.day} className="bg-white rounded-3xl p-5 shadow-md flex flex-col items-center gap-4 hover:-translate-y-1 transition duration-300">

                            <p className="text-slate-500 font-medium"> {item.day}</p>

                            <Icon size={35} className="text-[#002b99]" />

                            <p className="text-2xl font-bold text-slate-800">{item.temp}</p>

                        </div>
                    )
                })}
            </div>
        </section>
    )
}