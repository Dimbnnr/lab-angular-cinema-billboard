import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service'


@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {

 showMovie = [];

  constructor(private mooovie: MovieService) { }



  ngOnInit() {
    this.showMovie = this.mooovie.getMovies()
  }

}
