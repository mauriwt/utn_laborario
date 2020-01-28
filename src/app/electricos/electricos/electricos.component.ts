import { Component, OnInit, ViewChild } from '@angular/core';
import { CRUDService, AlertasService } from 'app/providers';
import { Router, ActivatedRoute } from '@angular/router';
import { Eqelectricos, CatEqelectricos } from 'app/models';
import { config } from 'app/shared/smartadmin.config';
declare var $;
@Component({
  selector: 'app-electricos',
  templateUrl: './electricos.component.html',
  styleUrls: ['./electricos.component.css']
})
export class ElectricosComponent implements OnInit {

  @ViewChild('mdeqElectricos') modal: any;

  @ViewChild('mdDeleteqElectricos') deletedmodal: any;
  @ViewChild('mdDetalleeqElectricos') detallemodal: any;
  public cargando: boolean;
  private base = config.APIRest.url;
  public parametros: Eqelectricos[];
  public eqElectricos: Eqelectricos;
  public catprt: CatEqelectricos[];

  constructor(private crud: CRUDService, private router: Router, private aroute: ActivatedRoute,
    private msj: AlertasService) { }

  ngOnInit() {
    this.eqElectricos = new Eqelectricos();
    this.getAplicaciones();
    this.getAplicacionesCat();
    this.parametros = new Array<Eqelectricos>();
  }

  getAplicacionesCat() {
    this.cargando = true;
    this.crud.obtener(`${this.base}${config.APIRest.cateqelectricos.list}`).subscribe(response => {
      this.catprt = response;
      this.cargando = false;
    }, error => {
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
      this.cargando = false;
    })
  }
  /**
   *getNombre(idCategoria): string{
      let categoria = this.catprt.find(cat => cat.id_categoria = idCategoria);
      if(categoria)
        return categoria.nombre;
      else return "No aplica";
    }
  */
  getAplicaciones() {
    this.cargando = true;
    this.crud.obtener(`${this.base}${config.APIRest.eqelectricos.list}`).subscribe(response => {
      this.parametros = response;
      this.cargando = false;
    }, error => {
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
      this.cargando = false;
    })
  }

  saveValidar(valid) {
    let rescu = this.parametros.find(dat => dat.cod_utn === this.eqElectricos.cod_utn);
    let ress = this.parametros.find(dat => dat.serie === this.eqElectricos.serie);
    if (!valid) return;
    if (this.eqElectricos.id_eq_electrico) {
      this.save("update", `${config.APIRest.eqelectricos.update}/${this.eqElectricos.id_eq_electrico}`);
    } else {
      if (!rescu) {
        if (!ress) {
          this.save("insert", config.APIRest.eqelectricos.add);
        }
        else {
          this.msj.mostrarAlertaError("<b>Error</b>", "<b>El numero de serie ya esta en Uso</b>", "")
        }
      }
      else {
        this.msj.mostrarAlertaError("<b>Error</b>", "<b>El Codigo Utn ya esta en Uso</b>", "")
      }
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

  getFila(electricos) {
    this.eqElectricos = new Eqelectricos();
    this.eqElectricos = Object.assign({}, electricos)
    this.modal.show();
  }
  cancelar() {
    this.eqElectricos = Object.assign({}, new Eqelectricos());
    $('#frmElectricos').bootstrapValidator('resetForm', true);
    this.modal.hide();
  }

  open() {
    this.modal.show();
  }

  getNombre(idCategoria): string {
    let categoria = this.catprt.find(cat => cat.id_cat_eq_electricos == idCategoria);
    if (categoria)
      return categoria.nombre;
    else return "No aplica";
  }


  getEstado(estado): string {
    let electricos = this.parametros.find(act => act.estado == estado);
    if (electricos) {
      if (Boolean(electricos.estado) == true) {
        return "Sujeto a prestamo";
      }
      else
        return "No sujeto a prestamo";
    }
  }

  getDetalle(activo) {
    this.eqElectricos = new Eqelectricos();
    this.eqElectricos = Object.assign({}, activo)
    this.detallemodal.show();
  }
  deletValidar(valid) {
    if (!valid) return;
    if (this.eqElectricos.id_eq_electrico) {
      this.save("delete", `${config.APIRest.eqelectricos.delete}/${this.eqElectricos.id_eq_electrico}`)
    }
    this.deletedmodal.hide();
  }

  deletedFila(activo) {
  this.eqElectricos = new Eqelectricos();
    this.eqElectricos = Object.assign({}, activo)
    this.deletedmodal.show();
  }
  decancelar() {
    this.eqElectricos = Object.assign({}, new Eqelectricos());
    $('#defrmActivo').bootstrapValidator('resetForm', true);
    this.deletedmodal.hide();
  }
  detacancelar() {
    this.eqElectricos = Object.assign({}, new Eqelectricos());
    $('#defrmActivo').bootstrapValidator('resetForm', true);
    this.detallemodal.hide();
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
