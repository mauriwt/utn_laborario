import { Component, OnInit } from '@angular/core';
import { CRUDService, AlertasService } from 'app/providers';
import { Router, ActivatedRoute } from '@angular/router';
import {Eqelectricos } from 'app/models';
import { config } from 'app/shared/smartadmin.config';

@Component({
  selector: 'app-cat-electricos',
  templateUrl: './cat-electricos.component.html',
  styleUrls: ['./cat-electricos.component.css']
})
export class CatElectricosComponent implements OnInit {
  public cargando: boolean;
  private base = config.APIRest.url;
  public parametros: Eqelectricos;

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

