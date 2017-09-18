import {Injectable} from '@angular/core';
import {Politica} from '../models/politica.model';

//Costos
const COSTO_FALTANTE = -10;
const COSTO_ALMACENAMIENTO = -3;
const COSTOXPEDIDOENDECENAS = [
  {costo: -20, minimo: 0, maximo: 20},
  {costo: -25, minimo: 21, maximo: 40},
  {costo: -30, minimo: 41, maximo: 100000},
];

//Stock inicial
const STOCK_INICIAL = 20;

//Gestion de politica de stock
const POLITICA_A = 10;

const POLITICA_C = 3;

@Injectable()
export class PoliticasService {

  public politicas: Politica[];

  constructor() {
    this.politicas = [];
  }

  public generarSimulacion(politicaId: number, distribucionDemanda: any[], distribucionDemora: any[]) {

    let politica: Politica = new Politica();

    for (let i = 0; i < this.politicas.length; i++) {

      politica.randomDemanda = Math.random();
      politica.demanda = this.buscarDistribuciones(distribucionDemanda, this.politicas[i].randomDemanda);
      politica.vendido = this.obtenerVenta(this.politicas[i].demanda, this.politicas[i].disponible, this.politicas[i - 1].stock);
      politica.stock = this.obtenerStock(this.politicas[i].demanda, this.politicas[i].disponible, this.politicas[i - 1].stock);
      politica.ganancia = this.obtenerGanancia(this.politicas[i].vendido);
      politica.randomDemora = this.obtenerRandomDemora(this.politicas[i].cantidadDias);
      // politicaId[i].demora = this.buscarDemora(distribucionDemora, politicas[i].randomDemora, politicas[i].cantidadDias, politicas[i - 1].demora);
      politica.costoFaltante = this.obtenerCostoFaltante(this.politicas[i].demanda, this.politicas[i].vendido);
      politica.costoAlmacenamientoStock = this.obtenerCostoAlmacenamientoStock(this.politicas[i].stock);
      politica.costoPedido = this.obtenerCostoPedido(this.politicas[i].randomDemora);
      politica.costoTotal = this.politicas[i].costoFaltante + this.politicas[i].costoAlmacenamientoStock + this.politicas[i].costoPedido;
      politica.costoPromedio = this.politicas[i].costoTotal / i;

      this.politicas.push(politica);
    }

    return this.politicas;
  }

  private obtenerGanancia(vendido: number): number {
    return vendido * 10 * 10;
  }

  private obtenerStock(demanda: number, disponible: number, stock: number): number {
    if (disponible + stock - demanda > 0) {
      return disponible + stock - demanda;
    }
    else {
      return 0;
    }
  }


  private obtenerVenta(demanda: number, disponible: number, stock: number): number {
    if (demanda < disponible + stock) {
      return demanda;
    }
    else {
      return disponible + stock;
    }
  }

  private buscarDistribuciones(distribucion: any[], random: number): number {

    for (let distri of distribucion) {
      if (distri.minimo <= random && random <= distri.maximo) {
        return distri.decenas;
      }
      else continue;
    }
  }

  public obtenerCostoFaltante(demanda: number, vendido: number): number {
    return Math.abs(demanda - vendido) * COSTO_FALTANTE * 10 * 10;
  }

  public obtenerCostoAlmacenamientoStock(stock: number): number {
    return stock * COSTO_ALMACENAMIENTO * 10;
  }

  public obtenerCostoPedido(randomDemora: number): number {
    if (!randomDemora) {
      return 0;
    }
    else {
      return POLITICA_A;
    }
  }

  public obtenerRandomDemora(cantDias: number): number {
    if (cantDias === 7) {
      return Math.random();
    }
    else {
      return 0;
    }

  }

  public buscarDemora(distribucionDemora: any[], randomDemora: number, cantDias: number, demoraAnterior: number): number {
    if (randomDemora) {
      return this.buscarDistribuciones(distribucionDemora, randomDemora);
    }
    else {
      //if(cantDias > 0){
      //  cant
      // }
      return 0;
    }
  }

  private generarRandoms(): number {
    let rnd = Math.random();

    return rnd;
  }

  public getCostoPedido(): any[] {
    return COSTOXPEDIDOENDECENAS;
  }
}
