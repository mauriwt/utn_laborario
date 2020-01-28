import { Component, OnInit, ViewChild } from '@angular/core';
import { CRUDService, AlertasService } from 'app/providers';
import { Router, ActivatedRoute } from '@angular/router';
import {TipoEspacio } from 'app/models';
import { config } from 'app/shared/smartadmin.config';
declare var $;
@Component({
  selector: 'app-tipo-espacio',
  templateUrl: './tipo-espacio.component.html',
  styleUrls: ['./tipo-espacio.component.css']
})
export class TipoEspacioComponent implements OnInit {

  @ViewChild('mdtipoEspa') modal: any;
  public cargando: boolean;
  private base = config.APIRest.url;
  public parametros: TipoEspacio[];
  public tipoEspa: TipoEspacio;

  constructor(private crud: CRUDService, private router: Router, private aroute: ActivatedRoute,
     private msj:AlertasService) { }

  ngOnInit() {
    this.tipoEspa = new TipoEspacio();
    this.getAplicaciones();
  }
 
  getAplicaciones() {
    this.cargando = true;
    this.crud.obtener(`${this.base}${config.APIRest.tipoespacio.list}`).subscribe(response => {
      this.parametros = response;
      this.cargando = false;
    }, error =>{
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
      this.cargando = false;
    })
  }

  saveValidar(valid) {
    if (!valid) return;
    let ress = this.parametros.find(dat => dat.nombre === this.tipoEspa.nombre);
    if (this.tipoEspa.id_tipo) {
      this.save("update", `${config.APIRest.tipoespacio.update}/${this.tipoEspa.id_tipo}`);
    } else {
      if(!ress){
      this.save("insert",config.APIRest.tipoespacio.add);
      } else{
        this.msj.mostrarAlertaError("<b>Error</b>", "<b>El nombre ya esta en uso.</b>","")
    
      }
    }
  }

  save(tipo, url) {
    this.cargando = true;
    this.modal.hide();
    console.log(this.tipoEspa)
    this.crud.save(`${this.base}${url}`, this.tipoEspa, tipo).subscribe(response => {
      this.getAplicaciones();
      this.cancelar();
      this.msj.mostrarAlertaMessage("<b>Información</b>", "<b>El registro se guardó correctamente.</b>", "")
    }, error => {
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detectó un problema en la respuesta del servicio.</b>", "")
      this.cargando = false;
    })
  }

  getFila(tipo){
    this.tipoEspa = new TipoEspacio();
    this.tipoEspa = Object.assign({}, tipo)
    this.modal.show();
  }
  cancelar(){
    this.tipoEspa = Object.assign({}, new TipoEspacio());
    $('#frmTipo').bootstrapValidator('resetForm', true);
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
      fields: TipoEspacio.getValidators()
    };
  }

}
