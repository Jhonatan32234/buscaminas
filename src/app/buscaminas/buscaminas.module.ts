import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuadriculaComponent } from './cuadricula/cuadricula.component';
import { CuadrosComponent } from './cuadros/cuadros.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CuadriculaComponent,
    CuadrosComponent

  ],
  imports: [
    CommonModule,
    FormsModule
    
  ],
  exports:[
    CuadriculaComponent
  ]
})
export class BuscaminasModule { }
