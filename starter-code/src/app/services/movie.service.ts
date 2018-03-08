import { Injectable } from '@angular/core';
import movies from '../../sample-movies';

@Injectable()
export class MovieService {
    peliculas = movies;
    constructor() { }

    getMovies(){
        return this.peliculas;
    }


    getMovie(id){
let n = this.peliculas.filter( m => m.id == id)
        return n[0]
    };
    }


