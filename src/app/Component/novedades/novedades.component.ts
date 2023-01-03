import { Component } from '@angular/core';
import { RequestsService } from 'src/app/Service/requests.service';
import { Film } from 'src/app/Models/film';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.scss']
})

export class NovedadesComponent {
  public cache={
    new:[] as Film[]
  }
  public films: Film[] = [];
  public descriptions: { [id: string]: string } = {}; 
  constructor(public requestService: RequestsService, private http:HttpClient) {}

  ngOnInit(): void {
    if (this.cache.new.length>0) {
      this.films = this.cache.new;
    } else {
      this.requestService.getNew().subscribe((data: { [key: string]: any }) => {
        this.films = data['results'].filter((film: Film) => film.title).slice(0, 4);
        this.cache.new= this.films;
      });
    }
  }
  showDescription(film: Film): void {
    if (film.id) {  
      if (this.descriptions[film.id]) {
        delete this.descriptions[film.id];
      } else {
        this.descriptions[film.id] = film.overview;
      }
    }
  }
}
