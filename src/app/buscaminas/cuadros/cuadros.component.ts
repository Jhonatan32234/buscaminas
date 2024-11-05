import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { min } from 'rxjs';
import { BuscaminasService } from '../service/buscaminas.service';

@Component({
  selector: 'app-cuadros',
  templateUrl: './cuadros.component.html',
  styleUrl: './cuadros.component.css'
})
export class CuadrosComponent implements OnInit {

  cuadricula:number[][] = [];

  constructor(private cuadros:BuscaminasService){
  }

  ngOnInit(): void {
    this.actualizarCuadricula();
    console.log("cuadricula cuadros");
    console.log(this.cuadricula);
    
    }

    actualizarCuadricula():void{
      this.cuadricula = this.cuadros.getCuadros();

    }
  
  verificarMina(mina:number):void{
    if (mina==0) {
      alert("MINA")
      
    }

  }



}
