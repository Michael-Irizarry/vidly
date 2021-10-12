import React, { Component } from "react";

import { getMovies } from "../services/fakeMovieService";

class MoviesTable extends React.Component {
  state = {
    movies: getMovies(),
  };

  constructor() {
    super();
    this.handleDeleteMovie = this.handleDeleteMovie.bind(this);
    this.fillTable = this.fillTable.bind(this);
    this.table = this.table.bind(this);
  }

  handleDeleteMovie(id) {
    const movies = this.state.movies.filter((item) => item._id !== id);
    this.setState({ movies });
  }

  render() {
    return <main className="container">{this.table()}</main>;
  }

  table() {
    if (this.state.movies.length > 0) {
      return (
        <div>
          <div>Showing {this.state.movies.length} in database</div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>{this.fillTable()}</tbody>
          </table>
        </div>
      );
    } else {
      return <div>There is not movies in database</div>;
    }
  }

  fillTable() {
    return this.state.movies.map((movie) => (
      <tr key={movie._id}>
        <th scope="row">{movie.title}</th>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => this.handleDeleteMovie(movie._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  }
}

export default MoviesTable;
