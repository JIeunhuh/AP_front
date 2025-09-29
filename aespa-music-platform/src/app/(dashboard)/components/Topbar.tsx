import Image from "next/image";

export default function Topbar() {
  return (
    <header className="glass-panel h-14 flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center gap-4">
        <button className="lg:hidden">
          <span className="text-2xl">≡</span>
        </button>
        <div className="flex items-center gap-2 text-sm">
          <span className="muted">Home</span>
          <span className="muted">&gt;</span>
          <span className="text-white">E-commerce</span>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="relative">
        <input
          placeholder="Search"
          className="bg-surface-700 text-sm placeholder-[#a7afff] rounded-md px-3 py-2 pl-10 outline-none border border-white/10 w-48 md:w-72"
        />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#a7afff]">🔍</span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="relative">
            <span className="text-sm">Inbox</span>
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">8</span>
          </div>
          
          <div className="relative">
            <span className="text-lg">🔔</span>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">9</span>
          </div>
          
          <div className="relative">
            <span className="text-lg">💬</span>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">5</span>
          </div>
          
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
            <span className="text-white text-sm">👤</span>
          </div>
        </div>
      </div>
    </header>
  );
}
