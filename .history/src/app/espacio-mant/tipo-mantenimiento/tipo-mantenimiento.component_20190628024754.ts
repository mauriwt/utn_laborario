import { Component, OnInit, ViewChild } from '@angular/core';
import { CRUDService, AlertasService } from 'app/providers';
import { Router, ActivatedRoute } from '@angular/router';
import {TipoMant } from 'app/models';
import { config } from 'app/shared/smartadmin.config';
declare var $;
@Component({
  selector: 'app-tipo-mantenimiento',
  templateUrl: './tipo-mantenimiento.component.html',
  styleUrls: ['./tipo-mantenimiento.component.css']
})
export class TipoMantenimientoComponent implements OnInit {

  @ViewChild('mdtipoMant') modal: any;
  public cargando: boolean;
  private base = config.APIRest.url;
  public parametros: TipoMant;
  public tipoMant: TipoMant;

  constructor(private crud: CRUDService, private router: Router, private aroute: ActivatedRoute,
     private msj:AlertasService) { }

  ngOnInit() {
    this.tipoMant = new TipoMant();
    this.getAplicaciones();
  }
 
  getAplicaciones() {
    this.cargando = true;
    this.crud.obtener(`${this.base}${config.APIRest.tipomantenimiento.list}`).subscribe(response => {
      this.parametros = response;
      this.cargando = false;
    }, error =>{
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
      this.cargando = false;
    })
  }

  saveValidar(valid) {
    if (!valid) return;
    if (this.tipoMant.id_tmant) {
      this.save("update", `${config.APIRest.tipomantenimiento.update}/${this.tipoMant.id_tmant}`);
    } else {
      this.save("insert",config.APIRest.TipoMant.add);
    }
  }

  save(tipo, url) {
    this.cargando = true;
    this.modal.hide();
    console.log(this.tipoMant)
    this.crud.save(`${this.base}${url}`, this.tipoMant, tipo).subscribe(response => {
      this.getAplicaciones();
      this.cancelar();
      this.msj.mostrarAlertaMessage("<b>Información</b>", "<b>El registro se guardó correctamente.</b>", "")
    }, error => {
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detectó un problema en la respuesta del servicio.</b>", "")
      this.cargando = false;
    })
  }

  getFila(lugar){
    this.tipoMant = new TipoMant();
    this.tipoMant = Object.assign({}, lugar)
    this.modal.show();
  }
  cancelar(){
    this.tipoMant = Object.assign({}, new TipoMant());
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
      fields: TipoMant.getValidators()
    };
  }

}
