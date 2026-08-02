export default function SearchBar() {
  return (
    <div className="flex items-center gap-3 bg-white rounded-3xl px-5 py-4 shadow-md mt-5">

      <input type="text" placeholder="Search city..." className="flex-1 outline-none text-slate-700"/>

      <button className="bg-[#002176] text-white px-5 py-2 rounded-2xl hover:bg-[#003acd] transition">
        Search
      </button>

    </div>
  )
}