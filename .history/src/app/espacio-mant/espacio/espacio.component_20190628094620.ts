import { Component, OnInit, ViewChild } from '@angular/core';
import { CRUDService, AlertasService } from 'app/providers';
import { Router, ActivatedRoute } from '@angular/router';
import {Espacios } from 'app/models';
import { config } from 'app/shared/smartadmin.config';
declare var $;
@Component({
  selector: 'app-espacio',
  templateUrl: './espacio.component.html',
  styleUrls: ['./espacio.component.css']
})
export class EspacioComponent implements OnInit {

 
  @ViewChild('mdeSpacios') modal: any;
  public cargando: boolean;
  private base = config.APIRest.url;
  public parametros: Espacios;
  public eSpacios: Espacios;

  constructor(private crud: CRUDService, private router: Router, private aroute: ActivatedRoute,
     private msj:AlertasService) { }

  ngOnInit() {
    this.eSpacios = new Espacios();
    this.getAplicaciones();
  }
 
  getAplicaciones() {
    this.cargando = true;
    this.crud.obtener(`${this.base}${config.APIRest.espacios.list}`).subscribe(response => {
      this.parametros = response;
      this.cargando = false;
    }, error =>{
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
      this.cargando = false;
    })
  }

  saveValidar(valid) {
    if (!valid) return;
    if (this.eSpacios.id_ubicacion_esp) {
      this.save("update", `${config.APIRest.espacios.update}/${this.eSpacios.id_ubicacion_esp}`);
    } else {
      this.save("insert",config.APIRest.espacios.add);
    }
  }

  save(tipo, url) {
    this.cargando = true;
    this.modal.hide();
    console.log(this.eSpacios)
    this.crud.save(`${this.base}${url}`, this.eSpacios, tipo).subscribe(response => {
      this.getAplicaciones();
      this.cancelar();
      this.msj.mostrarAlertaMessage("<b>Información</b>", "<b>El registro se guardó correctamente.</b>", "")
    }, error => {
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detectó un problema en la respuesta del servicio.</b>", "")
      this.cargando = false;
    })
  }

  getFila(lugar){
    this.eSpacios = new Espacios();
    this.eSpacios = Object.assign({}, lugar)
    this.modal.show();
  }
  cancelar(){
    this.eSpacios = Object.assign({}, new Espacios());
    $('#frmLugar').bootstrapValidator('resetForm', true);
    this.modal.hide();
  }

  open(){
    this.modal.show();
  }


  getValidators() {
    return {
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      fields: Espacios.getValidators()
    };
  }

}

