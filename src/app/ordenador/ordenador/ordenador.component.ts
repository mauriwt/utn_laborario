import { Component, OnInit, ViewChild, } from '@angular/core';
import { CRUDService, AlertasService } from 'app/providers';
import { Router, ActivatedRoute } from '@angular/router';
import {Ordenador, MarcaOrdenador } from 'app/models';
import { config } from 'app/shared/smartadmin.config';
import SlimSelect from 'slim-select';
declare var $;
@Component({
  selector: 'app-ordenador',
  templateUrl: './ordenador.component.html',
  styleUrls: ['./ordenador.component.css']
})
export class OrdenadorComponent implements OnInit {

  @ViewChild('mdoRdenador') modal: any;
  public cargando: boolean;
  private base = config.APIRest.url;
  public parametros: Ordenador[];
  public oRdenador: Ordenador;
  public marca: MarcaOrdenador;
  data: any;
  constructor(private crud: CRUDService, private router: Router, private aroute: ActivatedRoute,
     private msj:AlertasService) { }

  ngOnInit() {
    this.oRdenador = new Ordenador();
    this.getAplicaciones();
    this. getAplicaciones();

   }
  /** */
      

  /** */
  public lista: string[] = [
    'Todo En uno',
    'Portatil',
    'Escritorio'];

  getAplicaciones() {
    this.cargando = true;
    this.crud.obtener(`${this.base}${config.APIRest.ordenadormarca.list}`).subscribe(response => {
      this.marca = response;
      this.cargando = false;
    }, error =>{
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
      this.cargando = false;
    })
  }
  getAplicacionesMAr() {
    this.cargando = true;
    this.crud.obtener(`${this.base}${config.APIRest.ordenador.list}`).subscribe(response => {
      this.parametros = response;
      this.cargando = false;
    }, error =>{
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
      this.cargando = false;
    })
  }

  saveValidar(valid) {
    if (!valid) return;
    let ress = this.parametros.find(dat => dat.seriecpu === this.oRdenador.seriecpu);
    // Res es utilizado para el update 
    let res = this.parametros.find(dat => dat.id_pc===this.oRdenador.id_pc && dat.seriecpu === this.oRdenador.seriecpu);
     if (this.oRdenador.id_pc) {
      if(!res){
        this.save("update", `${config.APIRest.ordenador.update}/${this.oRdenador.id_pc}`);
      
      }else{
        this.msj.mostrarAlertaError("<b>Error</b>", "<b>El nombre ya esta en uso.</b>","")
          }
    } else {if(!ress){
      this.save("insert",config.APIRest.Ordenador.add); } else{
        this.msj.mostrarAlertaError("<b>Error</b>", "<b>El nombre ya esta en uso.</b>","")
          }
     
    }
  }

  save(tipo, url) {
    this.cargando = true;
    this.modal.hide();
    console.log(this.oRdenador)
    this.crud.save(`${this.base}${url}`, this.oRdenador, tipo).subscribe(response => {
      this.getAplicaciones();
      this.cancelar();
      this.msj.mostrarAlertaMessage("<b>Información</b>", "<b>El registro se guardó correctamente.</b>", "")
    }, error => {
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detectó un problema en la respuesta del servicio.</b>", "")
      this.cargando = false;
    })
  }

  getFila(lugar){
    this.oRdenador = new Ordenador();
    this.oRdenador = Object.assign({}, lugar)
    this.modal.show();
  }
  cancelar(){
    this.oRdenador = Object.assign({}, new Ordenador());
    $('#frmLugar').bootstrapValidator('resetForm', true);
    this.modal.hide();
  }

  open(content){
    this.modal.show(content, {size: 'xl'});
  }


  getValidators() {
    return {
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      fields: Ordenador.getValidators()
    };
  }

}
