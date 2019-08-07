
import { Component, OnInit, ViewChild } from '@angular/core';
import { CRUDService, AlertasService } from 'app/providers';
import { Router, ActivatedRoute } from '@angular/router';
import { Horario } from 'app/models';
import * as CanvasJS from 'assets/js/canvasjs.min';
import { config } from 'app/shared/smartadmin.config';
import * as XLSX from 'ts-xlsx';
import { Http } from '@angular/http';


declare var $;
var table;

@Component({
  selector: 'app-horario-calendario',
  templateUrl: './horario-calendario.component.html',
  styleUrls: ['./horario-calendario.component.css']
})
export class HorarioCalendarioComponent implements OnInit {

  @ViewChild('mdhorario') modal: any;
  public cargando: boolean;
  private base = config.APIRest.url;
  public parametros: Horario;
  public horario: Horario;
  verificador: any;

  constructor(private _http: Http, private crud: CRUDService, private router: Router, private aroute: ActivatedRoute,
    private msj: AlertasService) { }

  ngOnInit() {
    this.getAplicaciones();
  }
  getAplicaciones() {
    this.cargando = true;
    this.crud.obtener(`${this.base}${config.APIRest.horario.list}`).subscribe(response => {
      this.parametros = response;
      this.cargando = false;
    }, error => {
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
      this.cargando = false;
    })
  }

  getFila(electricos) {
    this.horario = new Horario();
    this.horario = Object.assign({}, electricos)
    this.modal.show();
  }
  cancelar() {
    this.horario = Object.assign({}, new Horario());
    $('#frmElectricos').bootstrapValidator('resetForm', true);
    this.modal.hide();
  }
  getValidators() {
    return {
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      fields: Horario.getValidators()
    };
  }
  /** Cargar archivos de excel
   * mediante este codigo
   */
  
  arrayBuffer: any;
  file: File;
  incomingfile(event) {
    this.file = event.target.files[0];
  }
  
  Upload() {
    let fileReader = new FileReader();
    
      fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var horario= XLSX.utils.sheet_to_json(workbook.Sheets);
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      var horario = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      console.log(horario)
      var myString = JSON.stringify(horario);
      this.mostrarContenido(horario)
    }
        fileReader.readAsArrayBuffer(this.file);
       
  }

  
  public mostrarContenido(horario) {
    var elemento = document.getElementById('contenido-archivo');
    elemento.innerHTML = horario;
  }
  

 
}
 
 

