import { Component } from '@angular/core';
import { RequestsService } from 'src/app/Service/requests.service';
import { Film } from 'src/app/Models/film';
import { Form, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent {
  public films: Film[] = [];
  public result?:Film;
  public filtro:string;
  public show:boolean=false
  public click:number=0;
constructor(public requestService: RequestsService) {
  this.filtro="";
}
  filter(filtro:FormsModule){
    this.click++;
    this.requestService.getFilter(this.filtro).subscribe((data: { [key: string]: any }) => {
    this.films = data['results'].filter((film: Film) => film.title).slice(0, 4);
    this.result=this.films[0]
    if(!this.result){
      this.result=undefined
    }
    if(!this.show){
      this.show=!this.show
    }
  })}
}
