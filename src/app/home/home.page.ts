import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public base!: number;
  public altura!: number;
  public ladotriangulo1!: number;
  public ladotriangulo2!: number;
  public ladotriangulo3!: number;
  public resultado!: string;
  public presentingElement!: any;
  public modalPerimetroElement!: any;
  
  constructor(private actionSheetCtrl: ActionSheetController) {}
  
  public calcularArea() : void{
    this.resultado = "A área do triangulo é: " + (this.base*this.altura)/ 2 + "cm².";
  }
  public calcularPerimetro() : void{
    this.resultado = "O perimetro do triangulo é: " + (this.ladotriangulo1+this.ladotriangulo2+this.ladotriangulo3) + "cm²";
  }
  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }

  canDismiss = async () => {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Você tem certeza? Isso não guardará as informações.',
      buttons: [
        {
          text: 'Sim',
          role: 'confirm',
        },
        {
          text: 'Não',
          role: 'cancel',
        },
      ],
    });

    actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();

    return role === 'confirm';
  };
}