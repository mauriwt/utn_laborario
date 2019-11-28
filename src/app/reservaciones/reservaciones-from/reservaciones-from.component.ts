import { Component, OnInit, ViewChild } from '@angular/core';
import { CRUDService, AlertasService } from 'app/providers';
import { Router, ActivatedRoute } from '@angular/router';
import {Reservas } from 'app/models';
import { config } from 'app/shared/smartadmin.config';

declare var moment: any;
declare var $;
@Component({
  selector: 'app-reservaciones-from',
  templateUrl: './reservaciones-from.component.html',
  styleUrls: ['./reservaciones-from.component.css']
})
export class ReservacionesFromComponent implements OnInit {
  @ViewChild('mdrEserva') modal: any;
  public cargando: boolean;
  private base = config.APIRest.url;
  public parametros: Reservas;
  public reserva: Reservas;
  
  constructor() { }

  ngOnInit() {
  }

}
