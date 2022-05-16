import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 titulo = 'Calculadora-muy-basica';
 operadorA :number =0;
 operadorB : number=0;
 resultado: number=0;

 sumar ():void{
   this.resultado = this.operadorA+this.operadorB; 
 }
}
