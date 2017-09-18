import {Component, OnInit} from '@angular/core';
import {DistribucionesService} from '../../services/distribuciones.service';
import {Politica} from '../../models/politica.model';
import {PoliticasService} from '../../services/politicas.service';


@Component({
  selector: 'principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  public distribucionesDemanda: any[];
  public distribucionesDemora: any[];
  public costosPorPedido: any[];
  public simulacionesPoliticaA: Politica[];
  public simulacionesPoliticaB: Politica[];
  public simulacionesPoliticaC: Politica[];

  public tab = 1;
  public tabPoliticas = 1;

  constructor(private _distribucionesService: DistribucionesService,
              private _politicasService: PoliticasService) {
    this.distribucionesDemanda = [];
    this.distribucionesDemora = [];
    this.costosPorPedido = [];
    this.simulacionesPoliticaA = [];
    this.simulacionesPoliticaB = [];
    this.simulacionesPoliticaC = [];
  }

  ngOnInit() {
    this.distribucionesDemanda = this._distribucionesService.obtenerDistribucionDemanda();
    this.distribucionesDemora = this._distribucionesService.obtenerDistribucionDemora();
    this.costosPorPedido = this._politicasService.getCostoPedido();

    //this.simulacionesPoliticaA = new Politica[120];

    //this.simulacionesPoliticaA = this._politicasService.generarSimulacion(1//, this.distribucionesDemanda, this.distribucionesDemora);
  }

  setTab(num: number) {
    this.tab = num;
  }

  setTabPoliticas(num: number) {
    this.tabPoliticas = num;
  }


}
