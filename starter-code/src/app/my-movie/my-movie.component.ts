import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {
  showMovie = {};
  constructor(private mooovie: MovieService ,private router:ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params=>{
      this.showMovie = this.mooovie.getMovie(params['id']);
    });
  }

}
