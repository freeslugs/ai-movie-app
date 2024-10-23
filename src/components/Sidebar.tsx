import { Home, Search, Library, Plus, Heart, Film, Tv, Clock, Star, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed md:static w-64 bg-black h-full z-30 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6 h-full overflow-y-auto">
          <div className="flex justify-between items-center mb-8 md:block">
            <div className="text-white font-bold text-2xl">
              <span className="text-red-600">Stream</span>Flix
            </div>
            <button onClick={onClose} className="md:hidden text-gray-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <nav className="space-y-4">
            <a href="#" className="flex items-center space-x-3 text-white hover:text-red-600">
              <Home className="w-6 h-6" />
              <span>Home</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white">
              <Search className="w-6 h-6" />
              <span>Search</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white">
              <Film className="w-6 h-6" />
              <span>Movies</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white">
              <Tv className="w-6 h-6" />
              <span>TV Shows</span>
            </a>
          </nav>

          <div className="pt-8 space-y-4">
            <button className="flex items-center space-x-3 text-gray-400 hover:text-white w-full">
              <div className="p-1 bg-gray-400 rounded-sm hover:bg-white">
                <Clock className="w-4 h-4 text-black" />
              </div>
              <span>Watch Later</span>
            </button>
            <button className="flex items-center space-x-3 text-gray-400 hover:text-white w-full">
              <div className="p-1 bg-gradient-to-br from-red-600 to-pink-500 rounded-sm">
                <Star className="w-4 h-4 text-white" fill="white" />
              </div>
              <span>Favorites</span>
            </button>
          </div>

          <div className="pt-6 border-t border-gray-800">
            <p className="text-sm font-semibold text-gray-400 mb-3">My Lists</p>
            <ul className="space-y-2 text-sm text-gray-400">
              {['Action Movies', 'Oscar Winners', 'Sci-Fi Series', 'Must Watch', 'Family Movies'].map((list) => (
                <li key={list} className="cursor-pointer hover:text-white truncate">
                  {list}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}