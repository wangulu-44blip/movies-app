import { useQuery } from "@tanstack/react-query";

export function useNowshowing() {
    const {data,isLoading,isError} = useQuery({
      queryKey: ["now-showing"],
      queryFn: fetchMovies,
    });
    return {movies: data,isLoading,isError};
}

async function fetchMovies() {
const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
    const options = {
  method: 'GET',
  headers: {accept: 'application/json', Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWI2MzYzNDBmNGIwYWYzMjViNTkyYmNlOTQwNTk3NSIsIm5iZiI6MTc5MTk3NzYzNS41Nywic3ViIjoiNmFjZjY4YTMwYzE0MzJlYzA5OGYzMmMyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.1fwn9fFBBxNmbS8OMs2PsyA4TzqR6yGR0re5HwLyBPg'}
};
const response = await fetch(url, options);
const data = await response.json();
return data.results;
}