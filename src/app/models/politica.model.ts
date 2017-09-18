//Stock inicial
const STOCK_INICIAL = 20;

//Gestion de politica de stock
const POLITICA_A = 10;

const POLITICA_C = 3;

//Costos
const COSTO_FALTANTE = -10;
const COSTO_ALMACENAMIENTO = -3;

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

  public generarSimulacionPolitica(distribucionDemanda: any[], distribucionDemora: any[]): Politica[] {

    let politica: Politica = new Politica();
    let politicas: Politica[] = [];

    for (let i = 0; i < 120; i++) {

      politica.randomDemanda = Math.random();
      politica.demanda = this.buscarDistribuciones(distribucionDemanda, politica.randomDemanda);
      politica.vendido = this.obtenerVenta(politica.demanda, politica.disponible, politica.stock);
      politica.stock = this.obtenerStock(politica.demanda, politica.disponible, politica.stock);
      politica.ganancia = this.obtenerGanancia(politica.vendido);
      politica.randomDemora = this.obtenerRandomDemora(politica.cantidadDias);
      // politicaId[i].demora = this.buscarDemora(distribucionDemora, politicas[i].randomDemora, politicas[i].cantidadDias, politicas[i - 1].demora);
      politica.costoFaltante = this.obtenerCostoFaltante(politica.demanda, politica.vendido);
      politica.costoAlmacenamientoStock = this.obtenerCostoAlmacenamientoStock(politica.stock);
      politica.costoPedido = this.obtenerCostoPedido(politica.randomDemora);
      politica.costoTotal = politica.costoFaltante + politica.costoAlmacenamientoStock + politica.costoPedido;
      politica.costoPromedio = politica.costoTotal / i;

      politicas.push(politica);
    }

    return politicas;
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
}
