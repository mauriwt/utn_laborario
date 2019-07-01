import { Component, OnInit, ViewChild } from '@angular/core';
import { CRUDService, AlertasService } from 'app/providers';
import { Router, ActivatedRoute } from '@angular/router';
import {CatActivos } from 'app/models';
import { config } from 'app/shared/smartadmin.config';

declare var $;
@Component({
  selector: 'app-cat-activos',
  templateUrl: './cat-activos.component.html',
  styleUrls: ['./cat-activos.component.css']
})// que es este 
export class CatActivosComponent implements OnInit {

  @ViewChild('mdCatActivo') modal: any;
  public cargando: boolean;
  private base = config.APIRest.url;
  public parametros: CatActivos;
  public catActivo: CatActivos;

  constructor(private crud: CRUDService, private router: Router, private aroute: ActivatedRoute,
     private msj:AlertasService) { }

  ngOnInit() {
    this.catActivo = new CatActivos();
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

  saveValidar(valid) {
    if (!valid) return;
    if (this.catActivo.id_categoria) {
      this.save("update", `${config.APIRest.catactivos.update}/${this.catActivo.id_categoria}`);
    } else {
      this.save("insert",config.APIRest.catactivos.add);
    }
  }

  save(tipo, url) {
    this.cargando = true;
    this.modal.hide();
    console.log(this.catActivo)
    this.crud.save(`${this.base}${url}`, this.catActivo, tipo).subscribe(response => {
      this.getAplicaciones();
      this.cancelar();
      this.msj.mostrarAlertaMessage("<b>Información</b>", "<b>El registro se guardó correctamente.</b>", "")
    }, error => {
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detectó un problema en la respuesta del servicio.</b>", "")
      this.cargando = false;
    })
  }

  getFila(cat){
    this.catActivo = new CatActivos();
    this.catActivo = Object.assign({}, cat)
    this.modal.show();
  }
  cancelar(){
    this.catActivo = Object.assign({}, new CatActivos());
    $('#frmActivo').bootstrapValidator('resetForm', true);
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
      fields: CatActivos.getValidators()
    };
  }

}
