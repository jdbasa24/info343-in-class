import React from "react";

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return  (
            <div>
                <h2>{this.props.movie.title}</h2>
                <img src={"http://image.tmdb.org/t/p/w154" + this.props.movie.poster_path} />
                <p>{this.props.movie.overview}</p>
            </div>
        );
    }
}