import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public base!: number;
  public altura!: number;
  public resultado!: string;
  constructor() {}
  
  public calcularArea() : void{
    this.resultado = "A área do triangulo é: " + (this.base*this.altura)/ 2 + "cm².";
  }

}