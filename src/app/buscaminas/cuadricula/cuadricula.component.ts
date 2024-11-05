import { Component, ViewChild } from '@angular/core';
import { CuadrosComponent } from '../cuadros/cuadros.component';
import { BuscaminasService } from '../service/buscaminas.service';

@Component({
  selector: 'app-cuadricula',
  templateUrl: './cuadricula.component.html',
  styleUrl: './cuadricula.component.css'
})
export class CuadriculaComponent {

  @ViewChild(CuadrosComponent) cuadrosComponent!:CuadrosComponent;

  tamano:number= 0;

  constructor(private cuadros:BuscaminasService){
  }

  generarCuadricula():void{
    this.cuadros.cargarCuadros(this.tamano);
    this.cuadrosComponent.actualizarCuadricula();
    console.log(this.tamano);
    
  }

}
