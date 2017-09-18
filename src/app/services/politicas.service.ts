import {Injectable} from '@angular/core';
import {Politica} from '../models/politica.model';


const COSTOXPEDIDOENDECENAS = [
  {costo: -20, minimo: 0, maximo: 20},
  {costo: -25, minimo: 21, maximo: 40},
  {costo: -30, minimo: 41, maximo: 100000},
];



@Injectable()
export class PoliticasService {

  public politicas: Politica[];

  constructor() {
    this.politicas = [];
  }

  public generarSimulacion(politicaId: number, distribucionDemanda: any[], distribucionDemora: any[]): Politica[] {

    let politica: Politica = new Politica();
    let politicas: Politica[] = [];

    politicas = politica.generarSimulacionPolitica(distribucionDemanda, distribucionDemora);

    return politicas;
  }

  public getCostoPedido(): any[] {
    return COSTOXPEDIDOENDECENAS;
  }
}
