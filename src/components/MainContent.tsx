import { useEffect, useState } from 'react';
import { Play, Heart, MoreHorizontal } from 'lucide-react';
import { Movie, fetchTrendingMovies, fetchMovieDetails, getImageUrl } from '../services/tmdb';
import MovieList from './MovieList';
import ErrorBoundary from './ErrorBoundary';

export default function MainContent() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setError(null);
        const trendingMovies = await fetchTrendingMovies();
        const moviesWithDetails = await Promise.all(
          trendingMovies.slice(0, 5).map(movie => fetchMovieDetails(movie.id))
        );
        setMovies(moviesWithDetails);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  if (loading) {
    return (
      <div className="flex-1 bg-gradient-to-b from-blue-900 to-black flex items-center justify-center">
        <div className="text-white">Loading amazing movies...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 bg-gradient-to-b from-blue-900 to-black flex items-center justify-center">
        <div className="text-center p-8">
          <h2 className="text-2xl text-white mb-4">Oops!</h2>
          <p className="text-gray-400 mb-4">{error}</p>
          <button
            className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700"
            onClick={() => window.location.reload()}
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  const featuredMovie = movies[0];

  return (
    <ErrorBoundary>
      <div className="flex-1 bg-gradient-to-b from-blue-900 to-black overflow-y-auto">
        <div className="p-4 md:p-8">
          <div className="flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:space-x-6">
            {featuredMovie?.poster_path && (
              <img 
                src={getImageUrl(featuredMovie.poster_path)}
                alt={featuredMovie.title} 
                className="w-full md:w-60 h-48 md:h-60 shadow-2xl object-cover rounded-lg"
              />
            )}
            <div>
              <p className="text-sm text-gray-300 font-bold">TRENDING THIS WEEK</p>
              <h1 className="text-4xl md:text-7xl font-bold text-white mt-2 mb-4">
                {featuredMovie?.title}
              </h1>
              <p className="text-sm text-gray-300">
                Collection by <span className="text-white">StreamFlix</span> • {movies.length} films
              </p>
            </div>
          </div>

          <div className="mt-6 md:mt-8 flex items-center space-x-4">
            <button className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-red-600 rounded-full hover:scale-105 transition group">
              <Play className="w-6 h-6 md:w-7 md:h-7 text-white" fill="white" />
            </button>
            <button className="text-gray-400 hover:text-white">
              <Heart className="w-7 h-7 md:w-8 md:h-8" />
            </button>
            <button className="text-gray-400 hover:text-white">
              <MoreHorizontal className="w-7 h-7 md:w-8 md:h-8" />
            </button>
          </div>

          <MovieList movies={movies} />
        </div>
      </div>
    </ErrorBoundary>
  );
}