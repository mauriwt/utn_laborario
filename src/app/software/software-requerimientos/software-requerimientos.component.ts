import { Component, OnInit, ViewChild } from '@angular/core';
import { CRUDService, AlertasService } from 'app/providers';
import { Router, ActivatedRoute } from '@angular/router';
import {ReqSofware } from 'app/models';
import { config } from 'app/shared/smartadmin.config';

declare var $;
@Component({
  selector: 'app-software-requerimientos',
  templateUrl: './software-requerimientos.component.html',
  styleUrls: ['./software-requerimientos.component.css']
})
export class SoftwareRequerimientosComponent implements OnInit {

  @ViewChild('mdreqSofware') modal: any;
  public cargando: boolean;
  private base = config.APIRest.url;
  public parametros: ReqSofware;
  public reqSofware: ReqSofware;

  constructor(private crud: CRUDService, private router: Router, private aroute: ActivatedRoute,
     private msj:AlertasService) { }

  ngOnInit() {
    this.reqSofware = new ReqSofware();
    this.getAplicaciones();
  }
 
  getAplicaciones() {
    this.cargando = true;
    this.crud.obtener(`${this.base}${config.APIRest.reqsofware.list}`).subscribe(response => {
      this.parametros = response;
      this.cargando = false;
    }, error =>{
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
      this.cargando = false;
    })
  }

  saveValidar(valid) {
    if (!valid) return;
    if (this.reqSofware.id_software) {
      this.save("update", `${config.APIRest.reqsofware.update}/${this.reqSofware.id_software}`);
    } else {
      this.save("insert",config.APIRest.ReqSofware.add);
    }
  }

  save(tipo, url) {
    this.cargando = true;
    this.modal.hide();
    console.log(this.reqSofware)
    this.crud.save(`${this.base}${url}`, this.reqSofware, tipo).subscribe(response => {
      this.getAplicaciones();
      this.cancelar();
      this.msj.mostrarAlertaMessage("<b>Información</b>", "<b>El registro se guardó correctamente.</b>", "")
    }, error => {
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detectó un problema en la respuesta del servicio.</b>", "")
      this.cargando = false;
    })
  }

  getFila(lugar){
    this.reqSofware = new ReqSofware();
    this.reqSofware = Object.assign({}, lugar)
    this.modal.show();
  }
  cancelar(){
    this.reqSofware = Object.assign({}, new ReqSofware());
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
      fields: ReqSofware.getValidators()
    };
  }

}
