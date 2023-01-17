import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import "./DetailPage.css";

export default function DetailPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/movie/${movieId}`);
      setMovie(request.data);
    }
    fetchData();
  }, [movieId]);

  if (!movie) return <div>no movie data</div>;

  return (
    <section>
      <img
        className="modal__poster-img"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="poster"
      />

      <div>
        <h1 className="detail__title">
          {movie.title ? movie.title : movie.name}
        </h1>
        <p className="detail__date">
          {movie.release_date ? movie.release_date : movie.first_air_date}
        </p>
        <div className="detail__overview">
          <p>평점: {movie.vote_average}</p>
          <p>{movie.overview}</p>
        </div>
      </div>
    </section>
  );
}
