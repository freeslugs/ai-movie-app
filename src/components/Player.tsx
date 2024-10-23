import { Play, Pause, SkipBack, SkipForward, Volume2, Maximize2, Subtitles } from 'lucide-react';
import { getImageUrl } from '../services/tmdb';

export default function Player() {
  return (
    <div className="h-20 bg-gradient-to-b from-gray-900 to-black border-t border-gray-800 px-4 flex items-center justify-between">
      <div className="flex items-center w-1/3 min-w-[120px]">
        <img 
          src={getImageUrl("/9PqD3wSIjntyJDBzMNuxuKHwpUD.jpg")}
          alt="Movie thumbnail" 
          className="w-12 h-12 md:w-14 md:h-14 rounded-sm object-cover"
        />
        <div className="ml-3 md:ml-4 truncate">
          <div className="text-white text-sm truncate">Dune</div>
          <div className="text-gray-400 text-xs truncate hidden sm:block">Denis Villeneuve</div>
        </div>
      </div>

      <div className="flex flex-col items-center flex-1 max-w-xl px-4">
        <div className="flex items-center space-x-4 md:space-x-6">
          <button className="text-gray-400 hover:text-white hidden sm:block">
            <SkipBack className="w-5 h-5" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full hover:scale-105 transition">
            <Play className="w-5 h-5 text-black" fill="black" />
          </button>
          <button className="text-gray-400 hover:text-white hidden sm:block">
            <SkipForward className="w-5 h-5" />
          </button>
        </div>
        <div className="w-full mt-2 flex items-center space-x-2 text-xs">
          <span className="text-gray-400 hidden sm:block">1:24:15</span>
          <div className="h-1 flex-1 bg-gray-600 rounded-full">
            <div className="h-1 w-2/3 bg-red-600 rounded-full"></div>
          </div>
          <span className="text-gray-400 hidden sm:block">2:28:00</span>
        </div>
      </div>

      <div className="flex items-center justify-end space-x-4 w-1/3 min-w-[120px]">
        <button className="text-gray-400 hover:text-white hidden sm:block">
          <Subtitles className="w-5 h-5" />
        </button>
        <div className="items-center hidden md:flex">
          <Volume2 className="text-gray-400 w-5 h-5" />
          <div className="w-24 h-1 bg-gray-600 rounded-full ml-2">
            <div className="h-1 w-2/3 bg-red-600 rounded-full"></div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-white">
          <Maximize2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}