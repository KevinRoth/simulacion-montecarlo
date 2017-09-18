export class Politica {
  public politicaId: number;
  public randomDemanda: number;
  public demanda: number;
  public vendido: number;
  public stock: number;
  public ganancia: number;
  public costoFaltante: number;
  public costoAlmacenamientoStock: number;
  public costoPedido: number;
  public costoTotal: number;
  public costoPromedio: number;
  public contadorDiasSemana: number;
  public randomDemora: number;
  public demora: number;
  public disponible: number;
  public cantidadDias: number;

  constructor(politicaId?: number,
              randomDemanda?: number,
              demanda?: number,
              vendido?: number,
              stock?: number,
              ganancia?: number,
              costoFaltante?: number,
              costoAlmacenamientoStock?: number,
              costoPedido?: number,
              costoTotal?: number,
              costoPromedio?: number,
              contadorDiasSemanda?: number,
              randomDemora?: number,
              demora?: number,
              disponible?: number,
              cantidadDias?: number) {

    this.politicaId = politicaId;
    this.randomDemanda = randomDemanda;
    this.demanda = demanda;
    this.vendido = vendido;
    this.stock = stock;
    this.ganancia = ganancia;
    this.costoFaltante = costoFaltante;
    this.costoAlmacenamientoStock = costoAlmacenamientoStock;
    this.costoPedido = costoPedido;
    this.costoTotal = costoTotal;
    this.costoPromedio = costoPromedio;
    this.contadorDiasSemana = contadorDiasSemanda;
    this.randomDemora = randomDemora;
    this.demora = demora;
    this.disponible = disponible;
    this.cantidadDias = cantidadDias;
  }
}
