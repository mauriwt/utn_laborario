import { Component, OnInit, ViewChild } from '@angular/core';
import { CRUDService, AlertasService } from 'app/providers';
import { Router, ActivatedRoute } from '@angular/router';
import {Personas } from 'app/models';
import { config } from 'app/shared/smartadmin.config';
declare var $;
@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  @ViewChild('mdpErsona') modal: any;
  public cargando: boolean;
  private base = config.APIRest.url;
  public parametros: Personas[];
  public pErsona: Personas;

  constructor(private crud: CRUDService, private router: Router, private aroute: ActivatedRoute,
     private msj:AlertasService) { }

  ngOnInit() {
    this.pErsona = new Personas();
    this.getAplicaciones();
  }
 
  getAplicaciones() {
    this.cargando = true;
    this.crud.obtener(`${this.base}${config.APIRest.personas.list}`).subscribe(response => {
      this.parametros = response;
      this.cargando = false;
    }, error =>{
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
      this.cargando = false;
    })
  }

  eValidar(valid) {
    if (!valid) return;
    let ress = this.parametros.find(dat => dat.documento === this.pErsona.documento);
    // Res es utilizado para el update 
    let res = this.parametros.find(dat => dat.id_persona===this.pErsona.id_persona && dat.documento === this.pErsona.documento);
    if (this.pErsona.id_persona) {
      if(!res){
        this.save("update", `${config.APIRest.personas.update}/${this.pErsona.id_persona}`);
  
      }else{
        this.msj.mostrarAlertaError("<b>Error</b>", "<b>El nombre ya esta en uso.</b>","")
          }
    } else {if(!ress){
      this.save("insert",config.APIRest.personas.add);
    this.msj.mostrarAlertaError("<b>Error</b>", "<b>El nombre ya esta en uso.</b>","")
          }
     
    }
  }
  save(tipo, url) {
    this.cargando = true;
    this.modal.hide();
    console.log(this.pErsona)
    this.crud.save(`${this.base}${url}`, this.pErsona, tipo).subscribe(response => {
      this.getAplicaciones();
      this.cancelar();
      this.msj.mostrarAlertaMessage("<b>Información</b>", "<b>El registro se guardó correctamente.</b>", "")
    }, error => {
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detectó un problema en la respuesta del servicio.</b>", "")
      this.cargando = false;
    })
  }

  getFila(estudiante){
    this.pErsona = new Personas();
    this.pErsona = Object.assign({}, estudiante)
    this.modal.show();
  }
  cancelar(){
    this.pErsona = Object.assign({}, new Personas());
    $('#frmestudiante').bootstrapValidator('resetForm', true);
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
      fields: Personas.getValidators()
    };
  }

}
