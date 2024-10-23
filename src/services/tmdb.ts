const API_KEY = '55d00e73946f9191a7a20f9ef4277624';
const BASE_URL = 'https://api.themoviedb.org/3';

export interface Movie {
  id: number;
  title: string;
  director?: string;
  genre_ids: number[];
  vote_average: number;
  runtime?: number;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
}

export const fetchTrendingMovies = async (): Promise<Movie[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw new Error('Failed to fetch trending movies. Please try again later.');
  }
};

export const fetchMovieDetails = async (id: number): Promise<Movie> => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return {
      ...data,
      director: data.credits?.crew?.find(
        (person: any) => person.job === 'Director'
      )?.name,
    };
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw new Error(
      `Failed to fetch details for movie ${id}. Please try again later.`
    );
  }
};

export const getImageUrl = (
  path: string | null,
  size: 'w500' | 'original' = 'w500'
) => {
  return path ? `https://image.tmdb.org/t/p/${size}${path}` : null;
};
