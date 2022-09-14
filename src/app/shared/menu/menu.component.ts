import { Component } from '@angular/core';

interface menuItem{
  ruta: string;
  texto: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
  li{
    cursor: pointer;
  }
  `
  ]
})
export class MenuComponent   {

  rutas : menuItem[] = [
    {
      ruta: '/graficas/barra',
      texto: 'Barras'
    },
    {
      ruta: '/graficas/barra-doble',
      texto: 'Barras doble'
    },
    {
      ruta: '/graficas/dona',
      texto: 'Dona'
    },
    {
      ruta: '/graficas/dona-http',
      texto: 'Dona http'
    },
  ]
  constructor() { }

}
