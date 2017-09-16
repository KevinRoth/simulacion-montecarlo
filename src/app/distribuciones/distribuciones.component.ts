import {Component, OnInit} from '@angular/core';
import {DistribucionesService} from "../services/distribuciones.service";


@Component({
  selector: 'distribuciones',
  templateUrl: './distribuciones.component.html',
  styleUrls: ['./distribuciones.component.scss']
})
export class DistribucionesComponent implements OnInit {

  public distribucionesDemanda: any[];
  public distribucionesDemora: any[];
  public costosPorPedido: any[];

  public tab = 1;

  constructor(private _distribucionesService: DistribucionesService) {
    this.distribucionesDemanda = [];
    this.distribucionesDemora = [];
    this.costosPorPedido = [];
  }

  ngOnInit() {
    this.distribucionesDemanda = this._distribucionesService.obtenerDistribucionDemanda();
    this.distribucionesDemora = this._distribucionesService.obtenerDistribucionDemora();
    this.costosPorPedido = this._distribucionesService.obtenerCostoPorPedido();
  }

  setTab(num: number) {
    this.tab = num;
  }

}
