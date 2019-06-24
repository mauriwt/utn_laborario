import { Component, OnInit } from '@angular/core';
import { CRUDService, AlertasService } from 'app/providers';
import { Router, ActivatedRoute } from '@angular/router';
import {CatActivos } from 'app/models';
import { config } from 'app/shared/smartadmin.config';

@Component({
  selector: 'app-cat-activos',
  templateUrl: './cat-activos.component.html',
  styleUrls: ['./cat-activos.component.css']
})
export class CatActivosComponent implements OnInit {

  public cargando: boolean;
  private base = config.APIRest.url;
  public parametros: CatActivos;

  constructor(private crud: CRUDService, private router: Router, private aroute: ActivatedRoute,
     private msj:AlertasService) { }

  ngOnInit() {
    this.getAplicaciones();
  }

  getAplicaciones() {
    this.cargando = true;
    this.crud.obtener(`${this.base}${config.APIRest.catactivos.list}`).subscribe(response => {
      this.parametros = response;
      this.cargando = false;
    }, error =>{
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
      this.cargando = false;
    })
  }
}
