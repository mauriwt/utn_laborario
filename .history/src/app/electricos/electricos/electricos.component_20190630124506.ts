import { Component, OnInit, ViewChild } from '@angular/core';
import { CRUDService, AlertasService } from 'app/providers';
import { Router, ActivatedRoute } from '@angular/router';
import {Eqelectricos , CatEqelectricos} from 'app/models';
import { config } from 'app/shared/smartadmin.config';
declare var $;
@Component({
  selector: 'app-electricos',
  templateUrl: './electricos.component.html',
  styleUrls: ['./electricos.component.css']
})
export class ElectricosComponent implements OnInit {

  @ViewChild('mdeqElectricos') modal: any;
  public cargando: boolean;
  private base = config.APIRest.url;
  public parametros: Eqelectricos;
  public eqElectricos: Eqelectricos;
  public catprt: CatEqelectricos[];

  constructor(private crud: CRUDService, private router: Router, private aroute: ActivatedRoute,
     private msj:AlertasService) { }

  ngOnInit() {
    this.eqElectricos = new Eqelectricos();
    this.getAplicaciones();
    this.getAplicacionesCat();
  }
 
  getAplicacionesCat() {
    this.cargando = true;
    this.crud.obtener(`${this.base}${config.APIRest.cateqelectricos.list}`).subscribe(response => {
      this.catprt = response;
      this.cargando = false;
    }, error =>{
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
      this.cargando = false;
    })
  }
  getAplicaciones() {
    this.cargando = true;
    this.crud.obtener(`${this.base}${config.APIRest.eqelectricos.list}`).subscribe(response => {
      this.parametros = response;
      this.cargando = false;
    }, error =>{
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
      this.cargando = false;
    })
  }

  saveValidar(valid) {
    if (!valid) return;
    if (this.eqElectricos.id_eq_electrico) {
      this.save("update", `${config.APIRest.eqelectricos.update}/${this.eqElectricos.id_eq_electrico}`);
    } else {
      this.save("insert",config.APIRest.eqelectricos.add);
    }
  }

  save(tipo, url) {
    this.cargando = true;
    this.modal.hide();
    console.log(this.eqElectricos)
    this.crud.save(`${this.base}${url}`, this.eqElectricos, tipo).subscribe(response => {
      this.getAplicaciones();
      this.cancelar();
      this.msj.mostrarAlertaMessage("<b>Información</b>", "<b>El registro se guardó correctamente.</b>", "")
    }, error => {
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detectó un problema en la respuesta del servicio.</b>", "")
      this.cargando = false;
    })
  }

  getFila(lugar){
    this.eqElectricos = new Eqelectricos();
    this.eqElectricos = Object.assign({}, lugar)
    this.modal.show();
  }
  cancelar(){
    this.eqElectricos = Object.assign({}, new Eqelectricos());
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
      fields: Eqelectricos.getValidators()
    };
  }

}
