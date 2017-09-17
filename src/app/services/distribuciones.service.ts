import {Injectable} from '@angular/core';

const DISTRIBUCIONDEMANDAENDECENAS = [
  {decenas: 0, probabilidad: 0.05, probabilidadAcumulada: 0, minimo: 0, maximo: 0},
  {decenas: 10, probabilidad: 0.12, probabilidadAcumulada: 0, minimo: 0, maximo: 0},
  {decenas: 20, probabilidad: 0.18, probabilidadAcumulada: 0, minimo: 0, maximo: 0},
  {decenas: 30, probabilidad: 0.25, probabilidadAcumulada: 0, minimo: 0, maximo: 0},
  {decenas: 40, probabilidad: 0.22, probabilidadAcumulada: 0, minimo: 0, maximo: 0},
  {decenas: 50, probabilidad: 0.18, probabilidadAcumulada: 0, minimo: 0, maximo: 0}
];

const DISTRIBUCIONDEMORA = [
  {dias: 0, probabilidad: 0.301, probabilidadAcumulada: 0, minimo: 0, maximo: 0},
  {dias: 2, probabilidad: 0.361, probabilidadAcumulada: 0, minimo: 0, maximo: 0},
  {dias: 3, probabilidad: 0.217, probabilidadAcumulada: 0, minimo: 0, maximo: 0},
  {dias: 5, probabilidad: 0.087, probabilidadAcumulada: 0, minimo: 0, maximo: 0},
  {dias: 6, probabilidad: 0.026, probabilidadAcumulada: 0, minimo: 0, maximo: 0},
  {dias: 7, probabilidad: 0.006, probabilidadAcumulada: 0, minimo: 0, maximo: 0},
  {dias: 9, probabilidad: 0.001, probabilidadAcumulada: 0, minimo: 0, maximo: 0},
];

const COSTOXPEDIDOENDECENAS = [
  {costo: -20, minimo: 0, maximo: 20},
  {costo: -25, minimo: 21, maximo: 40},
  {costo: -30, minimo: 41, maximo: 100000},
];

@Injectable()
export class DistribucionesService {

  constructor() {
  }

  private generarAcumuladoDemanda(): void {
    let acumulador: number = 0;

    for (let distribucion of DISTRIBUCIONDEMANDAENDECENAS) {
      acumulador += distribucion.probabilidad;
      distribucion.probabilidadAcumulada = acumulador;

    }
  }

  private generarAcumuladoDemora(): void {
    let acumulador: number = 0;

    for (let distribucion of DISTRIBUCIONDEMORA) {
      acumulador += distribucion.probabilidad;
      distribucion.probabilidadAcumulada = acumulador;

    }
  }

  private generarRangosDemanda(): void {
    let minimo: number = 0;
    let maximo: number = 0;

    for (let distribucion of DISTRIBUCIONDEMANDAENDECENAS) {
      distribucion.minimo = minimo;
      distribucion.maximo = distribucion.probabilidadAcumulada - 0.0001;
      minimo = distribucion.probabilidadAcumulada;
    }
  }

  private generarRangosDemora(): void {
    let minimo: number = 0;
    let maximo: number = 0;

    for (let distribucion of DISTRIBUCIONDEMORA) {
      distribucion.minimo = minimo;
      distribucion.maximo = distribucion.probabilidadAcumulada - 0.0001;
      minimo = distribucion.probabilidadAcumulada;
    }
  }

  public obtenerDistribucionDemanda() {

    this.generarAcumuladoDemanda();

    this.generarRangosDemanda();

    return DISTRIBUCIONDEMANDAENDECENAS;
  }

  public obtenerDistribucionDemora() {
    this.generarAcumuladoDemora();
    this.generarRangosDemora();

    return DISTRIBUCIONDEMORA;
  }

  public obtenerCostoPorPedido() {
    return COSTOXPEDIDOENDECENAS;
  }


}
