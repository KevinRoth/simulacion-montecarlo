import {Component, OnInit} from '@angular/core';
import {DistribucionesService} from "../../services/distribuciones.service";


@Component({
  selector: 'principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  public distribucionesDemanda: any[];
  public distribucionesDemora: any[];
  public costosPorPedido: any[];

  public tab = 1;
  public tabPoliticas = 1;

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

  setTabPoliticas(num: number) {
    this.tabPoliticas = num;
  }


}
