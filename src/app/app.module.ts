import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CuadriculaComponent } from './buscaminas/cuadricula/cuadricula.component';
import { BuscaminasModule } from './buscaminas/buscaminas.module';


@NgModule({
  declarations: [
    AppComponent,
  
    
  ],
  imports: [
    BrowserModule,
    BuscaminasModule
],
  providers: [],
  bootstrap: [AppComponent]  
})
export class AppModule { }
