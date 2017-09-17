import {Injectable} from '@angular/core';
import {Politica} from '../models/politica.model';

@Injectable()
export class PoliticasService {

  constructor() {
  }

/*  public generarSimulacion(simularDias: number, distribucionDemanda: any[], distribucionDemora: any[]) {
    let politicas: Politica[] = new Politica[simularDias];


    for (let i = 0; i < politicas.length; i++) {
      politicas[i].randomDemanda = this.generarRandoms();
      politicas[i].demanda = this.buscarDemanda(distribucionDemanda, politicas[i].randomDemanda);
    }
  }
*/
 /* private buscarDemanda(distribucion: any[], randomDemanda: number): number {

    for (let i = 0; i < distribucion.length; i++) {
      for (let j = 1; j < distribucion.length; j++) {
        if(distribucion[i]. )
      }
    }

  }
*/

  private generarRandoms(): number {
    return Math.random();
  }
}
