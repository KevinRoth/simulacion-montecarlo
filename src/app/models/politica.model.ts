export class Politica {
  public randomDemanda: number;
  public demanda: number;
  public vendido: number;
  public stock: number;
  public ganancia: number;
  public costoFaltante: number;
  public costoAlmacenamientoStock: number;
  public costoPedido: number;
  public contadorDiasSemana: number;
  public randomDemora: number;
  public demora: number;
  public disponible: number;

  constructor(randomDemanda?: number,
              demanda?: number,
              vendido?: number,
              stock?: number,
              ganancia?: number,
              costoFaltante?: number,
              costoAlmacenamientoStock?: number,
              costoPedido?: number,
              contadorDiasSemanda?: number,
              randomDemora?: number,
              demora?: number,
              disponible?: number) {

    this.randomDemanda = randomDemanda;
    this.demanda = demanda;
    this.vendido = vendido;
    this.stock = stock;
    this.ganancia = ganancia;
    this.costoFaltante = costoFaltante;
    this.costoAlmacenamientoStock = costoAlmacenamientoStock;
    this.costoPedido = costoPedido;
    this.contadorDiasSemana = contadorDiasSemanda;
    this.randomDemora = randomDemora;
    this.demora = demora;
    this.disponible = disponible;
  }
}
