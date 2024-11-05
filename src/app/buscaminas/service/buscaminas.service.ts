import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuscaminasService {
  
  
  cuadricula: number[][] = [];

  

  cargarCuadros(largo:number):void{
    console.log("largo:"+largo);
    this.cuadricula = [];
    for (let i = 0; i < largo; i++) {
      const columna = [];
      for (let j = 0; j < largo; j++) {
        columna.push(Math.floor(Math.random()*largo));        
      }
      this.cuadricula.push(columna)
    }
    console.log("cuadricula");
    console.log(this.cuadricula);

    
  }

  getCuadros():number[][] {
    return this.cuadricula;
  }

 

  
}
