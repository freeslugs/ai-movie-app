import React from 'react';
import { Clock3, Star } from 'lucide-react';
import type { Movie } from '../services/tmdb';

interface MovieListProps {
  movies: Movie[];
}

export default function MovieList({ movies }: MovieListProps) {
  return (
    <div className="mt-6 md:mt-8 overflow-x-auto">
      <table className="w-full text-left text-gray-400 text-sm min-w-[600px]">
        <thead>
          <tr className="border-b border-gray-800 text-xs uppercase">
            <th className="px-4 py-2 w-12">#</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2 hidden md:table-cell">Release Date</th>
            <th className="px-4 py-2">Rating</th>
            <th className="px-4 py-2 text-right">
              <Clock3 className="w-4 h-4 inline" />
            </th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={movie.id} className="hover:bg-white/10 group">
              <td className="px-4 py-3 w-12">{index + 1}</td>
              <td className="px-4 py-3">
                <div>
                  <div className="text-white">{movie.title}</div>
                  <div className="text-sm">{movie.director}</div>
                </div>
              </td>
              <td className="px-4 py-3 hidden md:table-cell">
                {new Date(movie.release_date).toLocaleDateString()}
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                  {movie.vote_average.toFixed(1)}
                </div>
              </td>
              <td className="px-4 py-3 text-right">
                {movie.runtime ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m` : 'N/A'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}