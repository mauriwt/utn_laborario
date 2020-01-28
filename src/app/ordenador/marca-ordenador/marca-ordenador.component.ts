import { Component, OnInit, ViewChild } from '@angular/core';
import { CRUDService, AlertasService } from 'app/providers';
import { Router, ActivatedRoute } from '@angular/router';
import {MarcaOrdenador} from 'app/models';
import { config } from 'app/shared/smartadmin.config';
declare var $;
@Component({
  selector: 'app-marca-ordenador',
  templateUrl: './marca-ordenador.component.html',
  styleUrls: ['./marca-ordenador.component.css']
})
export class MarcaOrdenadorComponent implements OnInit {

  
  @ViewChild('mdmarcaOrdena') modal: any;
  public cargando: boolean;
  private base = config.APIRest.url;
  public parametros: MarcaOrdenador[];
  public marcaOrdena: MarcaOrdenador;

  constructor(private crud: CRUDService, private router: Router, private aroute: ActivatedRoute,
     private msj:AlertasService) { }

  ngOnInit() {
    this.marcaOrdena = new MarcaOrdenador();
    this.getAplicaciones();
  }
 
  getAplicaciones() {
    this.cargando = true;
    this.crud.obtener(`${this.base}${config.APIRest.ordenadormarca.list}`).subscribe(response => {
      this.parametros = response;
      this.cargando = false;
    }, error =>{
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
      this.cargando = false;
    })
  }

  saveValidar(valid) {
    if (!valid) return;
    let ress = this.parametros.find(dat => dat.nombre_marca === this.marcaOrdena.nombre_marca);
    // Res es utilizado para el update 
    let res = this.parametros.find(dat => dat.id_marca===this.marcaOrdena.id_marca && dat.nombre_marca === this.marcaOrdena.nombre_marca);
    if (this.marcaOrdena.id_marca) {
      if(!res){
      this.save("update", `${config.APIRest.ordenadormarca.update}/${this.marcaOrdena.id_marca}`);
    
    }else{
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>El nombre ya esta en uso.</b>","")
        }} else {
      if(!ress){
      this.save("insert",config.APIRest.MarcaOrdenador.add); } else{
        this.msj.mostrarAlertaError("<b>Error</b>", "<b>El nombre ya esta en uso.</b>","")
          }
      
    }
  }

  save(tipo, url) {
    this.cargando = true;
    this.modal.hide();
    console.log(this.marcaOrdena)
    this.crud.save(`${this.base}${url}`, this.marcaOrdena, tipo).subscribe(response => {
      this.getAplicaciones();
      this.cancelar();
      this.msj.mostrarAlertaMessage("<b>Información</b>", "<b>El registro se guardó correctamente.</b>", "")
    }, error => {
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detectó un problema en la respuesta del servicio.</b>", "")
      this.cargando = false;
    })
  }

  getFila(lugar){
    this.marcaOrdena = new MarcaOrdenador();
    this.marcaOrdena = Object.assign({}, lugar)
    this.modal.show();
  }
  cancelar(){
    this.marcaOrdena = Object.assign({}, new MarcaOrdenador());
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
      fields: MarcaOrdenador.getValidators()
    };
  }

}
