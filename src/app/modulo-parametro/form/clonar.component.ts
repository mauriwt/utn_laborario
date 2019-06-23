import { Component, OnInit } from '@angular/core';
import { GenericoService, CRUDService, AlertasService } from 'app/providers';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { config } from 'app/shared/smartadmin.config';
import { Observable } from 'rxjs/Observable';
declare var $;
@Component({
  selector: 'bio-clonar',
  templateUrl: './clonar.component.html',
  styleUrls: []
})
export class ClonarComponent implements OnInit {
  public biometricos: any;
  public formulario: FormGroup;
  public cargando: boolean;
  public boxLoad: boolean;
  public _idGerencia: number;
  public _idDireccion: number
  public gerencias: any;
  public direcciones: any;
  public direccionesTmp: any;
  public personas: any;
  public pSelecionado:any
  public bSelecionado:any
  public codigos = [];
  constructor(private genServer: GenericoService, private router: Router, private aroute: ActivatedRoute, private crud: CRUDService, private msj: AlertasService) { }

  ngOnInit() {
   /*  this.pSelecionado = [];
    this.bSelecionado = [];
    this.formulario = this.genServer.generar(DTOBiometrico.campos())
    this.biometricos = []
    this.gerencias = JSON.parse(localStorage.getItem('gerencias'));
    this.direcciones = JSON.parse(localStorage.getItem('direcciones'));
    this.getBiometricos(); */
  }

/*   getBiometricos() {
    this.cargando = true;
    this.crud.obtener(`${this.genServer._base}${config.APIRest.biometrico.base}`).subscribe(response => {
      this.biometricos = response;
      this.cargando = false;
    })
  }

  public setGerencia(data) {
    if (data) {
      this.personas = [];
      this.boxLoad = true;
      this._idGerencia = data.cadId;
      this.direccionesTmp = this.direcciones.filter(x => x.corCadIdPadre == this._idGerencia);
      this.crud.obtener(`${this.genServer._base}${config.APIRest.cargo.allGer}/${this._idGerencia}`).subscribe(response => {
        if (response.length > 0) {
          this.getFiltroPersonas(response).subscribe(respueta => {
            this.personas = this.mapear(respueta)
            this.boxLoad = false;
          });
        } else {
          this.boxLoad = false;
        }
        this._idDireccion = null;
      }, error => {
        this.msj.mostrarAlertaError("<b>Error</b>", "<b>se detecto un problema al conectarse al servicio.</b>", error)
        this.boxLoad = false;
        this.direccionesTmp = null;
      });
    } else {
      this.direccionesTmp = null;
      this.personas = null;
    }
  }

  public setDireccion(data) {
    if (data) {
      this.boxLoad = true;
      this.personas = [];
      this._idDireccion = data.cadId;
      this.crud.obtener(`${this.genServer._base}${config.APIRest.cargo.allDir}/${this._idGerencia}/${this._idDireccion}`).subscribe(response => {
        if (response.length > 0) {
          this.getFiltroPersonas(response).subscribe(respueta => {
            this.personas = this.mapear(respueta);
            this.boxLoad = false;
          });
        } else {
          this.boxLoad = false;
        }
      });
    } else {
      let data = { cadId: this._idGerencia };
      this.setGerencia(data);
    }
  }

  public getFiltroPersonas(corPersonas) {
    return new Observable(observer => {
      this.crud.post(`${config.APIRest.url.core}${config.APIRest.persona.lista}`, corPersonas).subscribe(personas => {
        observer.next(personas.sort(this.genServer.orderBy("entApellidos")));
        observer.complete();
      }, error => {
        this.msj.mostrarAlertaError("<b>Error</b>", "<b>se detecto un problema al conectarse al servicio.</b>", error)
        this.cargando = false;
      });
    });
  }

  addPersona(dato) {
    if(!dato) return;
    if(!this.verRepetidos(dato.pecCodigo)){
      this.pSelecionado.push(dato)
    }else{
      this.msj.mostrarAlertaMessage("<b>Aviso</b>", "<b>El registro ya ha sido seleccionado.</b>", null);
    }
  }

  verRepetidos(id){
    let data = this.pSelecionado.find(f => f.pecCodigo === id)
    return data ? true : false;
  }

  removePersona(id) {
    this.pSelecionado = this.pSelecionado.filter(obj => obj.pecCodigo !== +id);
  }

  seleccionar(e) {
    if (e.currentTarget.checked) {
      this.genServer.checkAll();
      this.codigos = this.genServer.getBioIds(this.biometricos);
    } else {
      this.genServer.noCheckAll();
      this.codigos = [];
    }
  }

  isChecked() {
    return $('input[name="check"]:checked').length > 0;
  }

  getItem(id) {
    let dato = this.codigos.find(res => res === +id);
    dato ? this.codigos = this.codigos.filter(res => res !== dato) : this.codigos.push(+id);
  }


  
  cancelar() {
    // this.biometrico = new ThBiometrico();
    this.router.navigate(['/biometrico'], { relativeTo: this.aroute });
  }

  public confirmar() {
    $.SmartMessageBox({
      title: "<i class='fa fa-paper-plane txt-color-orangeDark'></i> ¿ Está seguro que los datos ingresados son los correctos.?",
      content: "<p class='txt-color-orangeDark'><b>Si es así haga click en ACEPTAR.</b></p>",
      buttons: '[ACEPTAR][CANCELAR]'
    }, (ButtonPressed, Value) => {
      if (ButtonPressed == "ACEPTAR") {
        
      }
    });
  }

  private mapear(lista) {
    let respuesta = []
    for (let per of lista) {
      respuesta.push({ pecCodigo: per.entId, nombre: `${per.entIdentificacion} ${per.entApellidos} ${per.entNombres}` })
    }
    return respuesta;
  } */
}
