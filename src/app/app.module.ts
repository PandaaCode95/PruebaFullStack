import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { NovedadesComponent } from './Component/novedades/novedades.component';
import { ValoracionesComponent } from './Component/valoraciones/valoraciones.component';
import { PopularesComponent } from './Component/populares/populares.component';
import { BusquedaComponent } from './Component/busqueda/busqueda.component';
import { LandingComponent } from './Pages/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NovedadesComponent,
    ValoracionesComponent,
    PopularesComponent,
    BusquedaComponent,
    LandingComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
